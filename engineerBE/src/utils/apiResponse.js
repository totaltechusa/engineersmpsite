function successResponse(res, { statusCode = 200, message = 'Success', data = {} } = {}) {
    return res.status(statusCode).json({
        status: true,
        statusCode,
        message,
        data: (data && typeof data === 'object') ? data : {},
    });
}

function errorResponse(res, { statusCode = 400, message = 'Failed', errors = [] } = {}) {
    return res.status(statusCode).json({
        status: false,
        statusCode,
        message,
        errors: Array.isArray(errors) ? errors : (errors ? [errors] : []),
        data: {},
    });
}

module.exports = {
    successResponse,
    errorResponse,
};
