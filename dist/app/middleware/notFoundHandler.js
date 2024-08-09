"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
// unknown route handler
const notFoundHandler = (req, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
        success: false,
        message: 'Route not found',
    });
};
exports.notFoundHandler = notFoundHandler;
