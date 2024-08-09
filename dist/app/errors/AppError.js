"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// customizing default express error
class AppError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
