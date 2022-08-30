const http = require("http");
/**
 * Responds to an HTTP request as JSON with code 200 and an object, stating that the request has succeeded.
 * @param {http.ServerResponse} response The response object to be handled.
 * @param {object} object This data will be sent */
function respondWithObject(response, object) {
    const httpReturnCode = 200;
    response.status(httpReturnCode).json({
        success: true,
        code: httpReturnCode,
        data: object,
    });
}

/**
 * Responds to an HTTP request as JSON with code 500 by default, stating that the user request has failed.
 * @param {number} code The HTTP response code you want to use.
 * @param {http.ServerResponse} response The response object to be handled.
 * @param {Error} error The error for debugging.
 * */
function respondWithFailure(response, code, error) {
    if (error) console.error(error);
    response.status(code).json({
        success: false,
        code,
    });
}

module.exports = {respondWithFailure, respondWithObject};