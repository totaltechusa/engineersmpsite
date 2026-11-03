const { body, validationResult } = require('express-validator');
const { errorResponse } = require('../utils/apiResponse');

const signupRules = [
    body('role')
        .optional()
        .isString().withMessage('role must be a string')
        .bail()
        .isIn(['user', 'engineer']).withMessage('role must be user or engineer'),
    body('fullName')
        .isString().withMessage('fullName must be a string')
        .bail()
        .trim()
        .notEmpty().withMessage('fullName is required')
        .isLength({ max: 120 }).withMessage('fullName must be 120 characters or fewer'),
    body('email')
        .isString().withMessage('email must be a string')
        .bail()
        .trim()
        .isEmail({ require_tld: true, allow_utf8_local_part: false })
        .withMessage('email must be a valid email address'),
    body('password')
        .isString().withMessage('password must be a string')
        .bail()
        .isLength({ min: 8, max: 128 }).withMessage('password must be between 8 and 128 characters')
        .matches(/[A-Za-z]/).withMessage('password must contain at least one letter')
        .matches(/[A-Z]/).withMessage('password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('password must contain at least one lowercase letter')
        .matches(/\d/).withMessage('password must contain at least one number')
        .matches(/[^A-Za-z0-9\s]/).withMessage('password must contain at least one special character')
        .custom((password, { req }) => {
            const nameParts = typeof req.body.fullName === 'string'
                ? req.body.fullName.trim()
                    .split(/\s+/)
                    .filter(Boolean)
                : [];
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : null;
            const normalizedPassword = password.toLocaleLowerCase();

            if (firstName && normalizedPassword.includes(firstName.toLocaleLowerCase())) {
                throw new Error('password must not contain your first name');
            }

            if (lastName && normalizedPassword.includes(lastName.toLocaleLowerCase())) {
                throw new Error('password must not contain your last name');
            }

            return true;
        }),
    body('gender')
        .isString().withMessage('gender must be a string')
        .bail()
        .isIn(['male', 'female', 'transgender']).withMessage('gender must be male, female, or transgender'),
    body('serviceList')
        .isArray({ min: 1 }).withMessage('serviceList must be an array with at least one item')
        .custom((services) => services.every((service) => typeof service === 'string' && service.trim().length > 0))
        .withMessage('each service in serviceList must be a non-empty string'),
    body('skillsList')
        .isArray({ min: 1 }).withMessage('skillsList must be an array with at least one item')
        .custom((skills) => skills.every((skill) => typeof skill === 'string' && skill.trim().length > 0))
        .withMessage('each skill in skillsList must be a non-empty string'),
];

function validateSignup(req, res, next) {
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

module.exports = [...signupRules, validateSignup];
