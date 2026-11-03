const express = require('express');
const { body, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const validateSignup = require('../middleware/validateSignup');
const requireAuth = require('../middleware/requireAuth');
const { errorResponse } = require('../utils/apiResponse');

const router = express.Router();

function validateRequest(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const details = result.array().map(({ path, msg }) => ({ field: path, message: msg }));
        return errorResponse(res, {
            statusCode: 422,
            message: 'Validation failed',
            errors: details,
        });
    }
    return next();
}

const passwordRules = (field) => body(field)
    .isString().withMessage(`${field} must be a string`)
    .bail()
    .isLength({ min: 8, max: 128 }).withMessage(`${field} must be between 8 and 128 characters`)
    .matches(/[A-Z]/).withMessage(`${field} must contain at least one uppercase letter`)
    .matches(/[a-z]/).withMessage(`${field} must contain at least one lowercase letter`)
    .matches(/\d/).withMessage(`${field} must contain at least one number`)
    .matches(/[^A-Za-z0-9\s]/).withMessage(`${field} must contain at least one special character`);

router.post('/signup', validateSignup, authController.signup);

router.post(
    '/login',
    body('email').isEmail().withMessage('email must be a valid email address'),
    body('password').isString().notEmpty().withMessage('password is required'),
    validateRequest,
    authController.login,
);

router.post(
    '/social-login',
    body('provider').isIn(['google', 'apple']).withMessage('provider must be google or apple'),
    body('email').isEmail().withMessage('email must be a valid email address'),
    validateRequest,
    authController.socialLogin,
);

router.post(
    '/verify-email',
    body('token').isString().withMessage('token must be a string').bail().notEmpty().withMessage('token is required'),
    validateRequest,
    authController.verifyEmail,
);

router.get(
    '/verify-email',
    authController.verifyEmail,
);

router.post(
    '/resend-verification',
    body('email').isEmail().withMessage('email must be a valid email address'),
    validateRequest,
    authController.resendVerificationEmail,
);

router.post(
    '/forgot-password',
    body('email').isEmail().withMessage('email must be a valid email address'),
    validateRequest,
    authController.requestPasswordReset,
);

router.post(
    '/reset-password',
    body('token').isString().notEmpty().withMessage('token is required'),
    passwordRules('password'),
    validateRequest,
    authController.resetPassword,
);

router.get('/me', requireAuth, authController.getProfile);

router.patch(
    '/me',
    requireAuth,
    body('fullName').optional().isString().trim().notEmpty().isLength({ max: 120 })
        .withMessage('fullName must be between 1 and 120 characters'),
    body('gender').optional().isIn(['male', 'female', 'transgender', 'other'])
        .withMessage('gender must be male, female, transgender, or other'),
    body('serviceList').optional().isArray()
        .withMessage('serviceList must be an array'),
    body('skillsList').optional().isArray()
        .withMessage('skillsList must be an array'),
    body('address').optional().isString().trim().isLength({ max: 255 })
        .withMessage('address must be 255 characters or fewer'),
    body('city').optional().isString().trim().isLength({ max: 100 })
        .withMessage('city must be 100 characters or fewer'),
    body('state').optional().isString().trim().isLength({ max: 100 })
        .withMessage('state must be 100 characters or fewer'),
    body('pincode').optional().isString().trim().isLength({ max: 20 })
        .withMessage('pincode must be 20 characters or fewer'),
    validateRequest,
    authController.updateProfile,
);

router.post(
    '/change-password',
    requireAuth,
    body('currentPassword').isString().notEmpty().withMessage('currentPassword is required'),
    passwordRules('newPassword')
        .custom((value, { req }) => value !== req.body.currentPassword)
        .withMessage('newPassword must be different from currentPassword'),
    validateRequest,
    authController.changePassword,
);

router.post('/logout', requireAuth, authController.logout);

module.exports = router;
