const express = require('express');
const authRoutes = require('./routes/authRoutes');
const HttpError = require('./utils/httpError');

const app = express();
const configuredOrigins = [
    process.env.FRONTEND_URL,
    ...(process.env.FRONTEND_ORIGINS || '').split(','),
]
    .filter(Boolean)
    .map((value) => {
        try {
            return new URL(value.trim()).origin;
        } catch {
            return null;
        }
    })
    .filter(Boolean);

const developmentOrigins = process.env.NODE_ENV === 'production'
    ? []
    : ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'];
const allowedOrigins = new Set([...configuredOrigins, ...developmentOrigins]);

app.use((req, res, next) => {
    const requestOrigin = req.get('origin');
    if (requestOrigin && allowedOrigins.has(requestOrigin)) {
        res.setHeader('Access-Control-Allow-Origin', requestOrigin);
        res.vary('Origin');
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    return next();
});

app.use(express.json());
app.use('/api/v1/auth', authRoutes);

app.use((req, res, next) => {
    next(new HttpError(404, 'Route not found'));
});

app.use((error, req, res, next) => {
    const statusCode = Number.isInteger(error.statusCode)
        ? error.statusCode
        : Number.isInteger(error.status)
            ? error.status
            : 500;

    if (statusCode >= 500) {
        console.error(error);
    }

    const message = statusCode >= 500 ? 'An unexpected error occurred' : error.message;

    res.status(statusCode).json({
        status: false,
        statusCode,
        message,
        errors: Array.isArray(error.errors) ? error.errors : (error.errors ? [error.errors] : []),
        data: {},
    });
});

module.exports = app;
