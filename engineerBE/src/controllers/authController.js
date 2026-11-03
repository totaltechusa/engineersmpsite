const userService = require('../services/userService');
const { successResponse } = require('../utils/apiResponse');
const { formatProfile } = require('../utils/formatProfile');

/**
 * Standard envelope:
 * {
 *   "status": true,
 *   "statusCode": 200,
 *   "message": "...",
 *   "data": { ... } // Always an Object or Array
 * }
 */

async function signup(req, res, next) {
    try {
        const signupResult = await userService.signup(req.body);
        const profile = formatProfile(signupResult.profile);

        return res.status(201).json({
            status: true,
            statusCode: 201,
            message: 'User registered successfully. Verification email has been sent.',
            data: {
                profile,
                verificationExpiresAt: signupResult.verificationExpiresAt,
            },
            user: profile,
            verificationExpiresAt: signupResult.verificationExpiresAt,
        });
    } catch (error) {
        next(error);
    }
}

async function verifyEmail(req, res, next) {
    try {
        const token = req.body?.token || req.query?.token;
        if (!token) {
            return res.status(400).json({
                status: false,
                statusCode: 400,
                message: 'Verification token is required',
                errors: [{ field: 'token', message: 'token is required' }],
                data: {},
            });
        }
        const user = await userService.verifyEmail(token);
        const profile = formatProfile(user);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Email verified successfully.',
            data: {
                profile,
            },
            user: profile,
        });
    } catch (error) {
        next(error);
    }
}

async function resendVerificationEmail(req, res, next) {
    try {
        await userService.resendVerificationEmail(req.body.email);
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'If that account needs email verification, a verification link has been sent.',
            data: {},
        });
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const result = await userService.login(req.body.email, req.body.password);
        const profile = formatProfile(result.profile);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Login successful.',
            data: {
                token: result.token,
                profile,
            },
            token: result.token,
            user: profile,
        });
    } catch (error) {
        next(error);
    }
}

async function socialLogin(req, res, next) {
    try {
        const { provider, socialId, email, fullName, role } = req.body;
        const result = await userService.socialLogin({
            provider,
            socialId,
            email,
            fullName,
            role,
        });
        const profile = formatProfile(result.profile);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: `${provider.charAt(0).toUpperCase() + provider.slice(1)} login successful.`,
            data: {
                token: result.token,
                profile,
            },
            token: result.token,
            user: profile,
        });
    } catch (error) {
        next(error);
    }
}

async function requestPasswordReset(req, res, next) {
    try {
        await userService.requestPasswordReset(req.body.email);
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'If an account exists for that email, a password reset link has been sent.',
            data: {},
        });
    } catch (error) {
        next(error);
    }
}

async function resetPassword(req, res, next) {
    try {
        const user = await userService.resetPassword(req.body.token, req.body.password);
        const profile = formatProfile(user);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Password has been reset. Please sign in.',
            data: {
                profile,
            },
            user: profile,
        });
    } catch (error) {
        next(error);
    }
}

async function getProfile(req, res, next) {
    try {
        const user = await userService.getProfile(req.authUser.uid);
        const profile = formatProfile(user);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Profile detail get successfully.',
            data: {
                profile,
            },
            ...profile,
        });
    } catch (error) {
        next(error);
    }
}

async function updateProfile(req, res, next) {
    try {
        const user = await userService.updateProfile(req.authUser.uid, req.body);
        const profile = formatProfile(user);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Profile updated successfully.',
            data: {
                profile,
            },
            ...profile,
        });
    } catch (error) {
        next(error);
    }
}

async function changePassword(req, res, next) {
    try {
        const result = await userService.changePassword(
            req.authUser.uid,
            req.body.currentPassword,
            req.body.newPassword,
        );
        const profile = formatProfile(result.profile);

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Password changed successfully.',
            data: {
                token: result.token,
                profile,
            },
            token: result.token,
            user: profile,
        });
    } catch (error) {
        next(error);
    }
}

async function logout(req, res, next) {
    try {
        await userService.logout(req.authUser.uid);
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Signed out successfully.',
            data: {},
        });
    } catch (error) {
        next(error);
    }
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
};
