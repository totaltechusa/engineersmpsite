const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const HttpError = require('../utils/httpError');

async function requireAuth(req, res, next) {
    const [scheme, token] = (req.get('authorization') || '').split(' ');
    if (scheme !== 'Bearer' || !token) {
        return next(new HttpError(401, 'Authentication required'));
    }

    try {
        const claims = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ uid: claims.sub });
        if (!user || !user.emailVerified || user.status !== 'active' || user.authVersion !== claims.ver) {
            return next(new HttpError(401, 'Authentication token is invalid or expired'));
        }
        req.authUser = user;
        return next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
            return next(new HttpError(401, 'Authentication token is invalid or expired'));
        }
        return next(error);
    }
}

module.exports = requireAuth;
