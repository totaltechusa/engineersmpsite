const { createHash, randomBytes, randomUUID } = require('node:crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const emailService = require('./emailService');
const HttpError = require('../utils/httpError');

const EMAIL_VERIFICATION_TTL_MS = 24 * 60 * 60 * 1000;
const PASSWORD_RESET_TTL_MS = 60 * 60 * 1000;
const AUTH_TOKEN_TTL = '8h';

async function signup(signupInput) {
    const rawVerificationToken = randomBytes(32).toString('hex');
    const verificationLink = createVerificationLink(rawVerificationToken);
    const emailVerificationExpiresAt = new Date(Date.now() + EMAIL_VERIFICATION_TTL_MS);

    const existingUser = await User.findOne({ email: signupInput.email.trim().toLowerCase() });

    if (existingUser) {
        throw new HttpError(409, 'An account already exists for this email');
    }

    if (signupInput.fullName) {
        ensurePasswordDoesNotContainName(signupInput.password, signupInput.fullName);
    }

    try {
        const passwordHash = await bcrypt.hash(hashPasswordInput(signupInput.password), 12);

        const userData = {
            ...signupInput,
            email: signupInput.email.trim().toLowerCase(),
            uid: randomUUID(),
            passwordHash,
            authProvider: 'local',
            role: signupInput.role || 'user',
            status: 'pending',
            emailVerified: false,
            emailVerificationTokenHash: hashToken(rawVerificationToken),
            emailVerificationExpiresAt,
        };

        const user = await User.create(userData);

        try {
            await emailService.sendVerificationEmail(user.email, verificationLink);
        } catch (mailErr) {
            console.error('Failed to send verification email during signup:', mailErr.message);
        }

        return {
            profile: toPublicProfile(user),
            verificationExpiresAt: emailVerificationExpiresAt,
        };
    } catch (error) {
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyPattern || {})[0];
            if (duplicateField === 'email') {
                throw new HttpError(409, 'Email already registered');
            }
            throw new HttpError(409, 'Duplicate information found');
        }

        throw error;
    }
}

async function login(email, password) {
    const user = await User.findOne({ email: email.trim().toLowerCase() }).select('+passwordHash');
    if (!user) {
        throw new HttpError(401, 'Email or password is incorrect');
    }

    if (user.authProvider !== 'local' && !user.passwordHash) {
        throw new HttpError(400, `This account is registered with ${user.authProvider} login. Please sign in with ${user.authProvider}.`);
    }

    if (!(await bcrypt.compare(hashPasswordInput(password), user.passwordHash))) {
        throw new HttpError(401, 'Email or password is incorrect');
    }
    if (!user.emailVerified || user.status !== 'active') {
        throw new HttpError(403, 'Verify your email before signing in');
    }

    return {
        token: createAuthToken(user),
        profile: toPublicProfile(user),
    };
}

/**
 * Handle Social Login (Google / Apple)
 * Token or decoded credentials payload from mobile/web app
 */
async function socialLogin({ provider, socialId, email, fullName, role = 'user' }) {
    if (!['google', 'apple'].includes(provider)) {
        throw new HttpError(400, 'Invalid social provider. Must be google or apple.');
    }

    const cleanEmail = (email || '').trim().toLowerCase();
    if (!cleanEmail) {
        throw new HttpError(400, 'Email is required from social provider');
    }

    let user = await User.findOne({
        $or: [
            { email: cleanEmail },
            ...(socialId ? [{ socialId, authProvider: provider }] : []),
        ],
    });

    if (user) {
        // Update user if socialId wasn't previously linked
        if (!user.socialId && socialId) {
            user.socialId = socialId;
            user.authProvider = provider;
        }
        // Verified automatically by Google / Apple
        user.emailVerified = true;
        if (user.status === 'pending') {
            user.status = 'active';
        }
        await user.save();
    } else {
        // Create new account for social user
        user = await User.create({
            uid: randomUUID(),
            email: cleanEmail,
            fullName: fullName || (cleanEmail.split('@')[0]),
            authProvider: provider,
            socialId: socialId || undefined,
            role: role || 'user',
            gender: 'other',
            status: 'active',
            emailVerified: true,
        });
    }

    return {
        token: createAuthToken(user),
        profile: toPublicProfile(user),
    };
}

async function verifyEmail(rawToken) {
    const user = await User.findOneAndUpdate(
        {
            emailVerificationTokenHash: hashToken(rawToken),
            emailVerificationExpiresAt: { $gt: new Date() },
        },
        {
            $set: {
                emailVerified: true,
                status: 'active',
            },
            $unset: {
                emailVerificationTokenHash: 1,
                emailVerificationExpiresAt: 1,
            },
        },
        { new: true, runValidators: true },
    );

    if (!user) {
        throw new HttpError(400, 'The email verification link is invalid or expired');
    }

    return toPublicProfile(user);
}

async function resendVerificationEmail(email) {
    const user = await User.findOne({
        email: email.trim().toLowerCase(),
        emailVerified: false,
        status: 'pending',
    });
    if (!user) {
        return;
    }

    const rawToken = randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + EMAIL_VERIFICATION_TTL_MS);
    const updatedUser = await User.findOneAndUpdate(
        { uid: user.uid, emailVerified: false, status: 'pending' },
        {
            $set: {
                emailVerificationTokenHash: hashToken(rawToken),
                emailVerificationExpiresAt: expiresAt,
            },
        },
    );
    if (!updatedUser) {
        return;
    }
    try {
        await emailService.sendVerificationEmail(user.email, createVerificationLink(rawToken));
    } catch (error) {
        console.error('Unable to deliver email verification link:', error);
    }
}

async function requestPasswordReset(email) {
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) {
        return;
    }

    const rawToken = randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + PASSWORD_RESET_TTL_MS);
    const updatedUser = await User.findOneAndUpdate(
        { uid: user.uid },
        {
            $set: {
                passwordResetTokenHash: hashToken(rawToken),
                passwordResetExpiresAt: expiresAt,
            },
        },
    );
    if (!updatedUser) {
        return;
    }

    try {
        await emailService.sendPasswordResetEmail(user.email, createFrontendLink('reset-password', rawToken));
    } catch (error) {
        console.error('Unable to deliver password reset email:', error);
    }
}

async function resetPassword(rawToken, password) {
    const user = await User.findOne({
        passwordResetTokenHash: hashToken(rawToken),
        passwordResetExpiresAt: { $gt: new Date() },
    });
    if (!user) {
        throw new HttpError(400, 'The password reset link is invalid or expired');
    }
    ensurePasswordDoesNotContainName(password, user.fullName);

    const updatedUser = await User.findOneAndUpdate(
        {
            uid: user.uid,
            passwordResetTokenHash: hashToken(rawToken),
            passwordResetExpiresAt: { $gt: new Date() },
        },
        {
            $set: { passwordHash: await bcrypt.hash(hashPasswordInput(password), 12) },
            $inc: { authVersion: 1 },
            $unset: { passwordResetTokenHash: 1, passwordResetExpiresAt: 1 },
        },
        { new: true },
    );
    if (!updatedUser) {
        throw new HttpError(400, 'The password reset link is invalid or expired');
    }
    return toPublicProfile(updatedUser);
}

async function getProfile(uid) {
    const user = await User.findOne({ uid });
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    return toPublicProfile(user);
}

async function updateProfile(uid, profileInput) {
    const updateData = {};
    if (profileInput.fullName !== undefined) updateData.fullName = profileInput.fullName.trim();
    if (profileInput.gender !== undefined) updateData.gender = profileInput.gender;
    if (Array.isArray(profileInput.serviceList)) updateData.serviceList = profileInput.serviceList;
    if (Array.isArray(profileInput.skillsList)) updateData.skillsList = profileInput.skillsList;
    if (profileInput.address !== undefined) updateData.address = profileInput.address.trim();
    if (profileInput.city !== undefined) updateData.city = profileInput.city.trim();
    if (profileInput.state !== undefined) updateData.state = profileInput.state.trim();
    if (profileInput.pincode !== undefined) updateData.pincode = profileInput.pincode.trim();

    const user = await User.findOneAndUpdate(
        { uid },
        { $set: updateData },
        { new: true, runValidators: true },
    );
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    return toPublicProfile(user);
}

async function changePassword(uid, currentPassword, newPassword) {
    const user = await User.findOne({ uid }).select('+passwordHash');
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    if (!user.passwordHash) {
        throw new HttpError(400, 'Social login accounts cannot change password here.');
    }
    if (!(await bcrypt.compare(hashPasswordInput(currentPassword), user.passwordHash))) {
        throw new HttpError(400, 'Current password is incorrect');
    }
    ensurePasswordDoesNotContainName(newPassword, user.fullName);

    const updatedUser = await User.findOneAndUpdate(
        { uid },
        {
            $set: { passwordHash: await bcrypt.hash(hashPasswordInput(newPassword), 12) },
            $inc: { authVersion: 1 },
        },
        { new: true },
    );
    if (!updatedUser) {
        throw new HttpError(404, 'User not found');
    }
    return {
        token: createAuthToken(updatedUser),
        profile: toPublicProfile(updatedUser),
    };
}

async function logout(uid) {
    await User.findOneAndUpdate({ uid }, { $inc: { authVersion: 1 } });
}

function createVerificationLink(rawToken) {
    return createFrontendLink('verify-email', rawToken);
}

function createFrontendLink(path, rawToken) {
    const frontendUrl = process.env.FRONTEND_URL;
    if (!frontendUrl) {
        throw new Error('FRONTEND_URL must be configured to create email verification links');
    }

    let url;
    try {
        url = new URL(frontendUrl);
    } catch {
        throw new Error('FRONTEND_URL must be a valid absolute URL');
    }

    if (!['http:', 'https:'].includes(url.protocol)) {
        throw new Error('FRONTEND_URL must use HTTP or HTTPS');
    }

    url.pathname = `${url.pathname.replace(/\/+$/, '')}/${path}`;
    url.search = '';
    url.hash = '';
    url.searchParams.set('token', rawToken);
    return url.toString();
}

function createAuthToken(user) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET must be configured to issue authentication tokens');
    }
    return jwt.sign(
        { ver: user.authVersion },
        secret,
        { subject: user.uid, expiresIn: AUTH_TOKEN_TTL },
    );
}

function ensurePasswordDoesNotContainName(password, fullName) {
    if (!fullName || typeof fullName !== 'string') return;
    const nameParts = fullName.trim().split(/\s+/).filter(part => part.length >= 2);
    const normalizedPassword = password.toLocaleLowerCase();
    if (nameParts.some((part) => normalizedPassword.includes(part.toLocaleLowerCase()))) {
        throw new HttpError(400, 'Password must not contain your first or last name');
    }
}

function validateVerificationConfig() {
    createVerificationLink('configuration-check');
}

function toPublicProfile(user) {
    return {
        id: user._id ? user._id.toString() : undefined,
        uid: user.uid,
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        authProvider: user.authProvider || 'local',
        socialId: user.socialId || null,
        serviceList: user.serviceList || [],
        skillsList: user.skillsList || [],
        address: user.address || '',
        city: user.city || '',
        state: user.state || '',
        pincode: user.pincode || '',
        role: user.role,
        status: user.status,
        emailVerified: user.emailVerified,
        created_at: user.createdAt,
        updated_at: user.updatedAt,
    };
}

function hashPasswordInput(password) {
    return createHash('sha256').update(password, 'utf8').digest('hex');
}

function hashToken(token) {
    return createHash('sha256').update(token, 'utf8').digest('hex');
}

module.exports = {
    signup,
    login,
    socialLogin,
    verifyEmail,
    resendVerificationEmail,
    requestPasswordReset,
    resetPassword,
    getProfile,
    updateProfile,
    changePassword,
    logout,
    validateVerificationConfig,
};
