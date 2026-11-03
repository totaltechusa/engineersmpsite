const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true, immutable: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, select: false }, // Optional for social login users
    authProvider: { type: String, enum: ['local', 'google', 'apple'], default: 'local' },
    socialId: { type: String, sparse: true },
    fullName: { type: String, required: true, maxlength: 120 },
    gender: { type: String, default: 'other' },
    serviceList: { type: [String], default: [] },
    skillsList: { type: [String], default: [] },
    address: { type: String, default: '', maxlength: 255 },
    city: { type: String, default: '', maxlength: 100 },
    state: { type: String, default: '', maxlength: 100 },
    pincode: { type: String, default: '', maxlength: 20 },
    role: { type: String, required: true, default: 'user' },
    status: { type: String, required: true, default: 'pending' },
    emailVerified: { type: Boolean, required: true, default: false },
    emailVerificationTokenHash: { type: String, select: false },
    emailVerificationExpiresAt: { type: Date, select: false },
    passwordResetTokenHash: { type: String, select: false },
    passwordResetExpiresAt: { type: Date, select: false },
    authVersion: { type: Number, required: true, default: 0 },
}, { timestamps: true, versionKey: false });

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
