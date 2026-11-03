class HttpError extends Error {
    constructor(statusCode, message, errors = null) {
        super(message);
        this.name = 'HttpError';
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

module.exports = HttpError;
