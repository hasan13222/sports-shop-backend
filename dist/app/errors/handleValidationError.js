"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// mongoose validation error
const handleValidationError = (err) => {
    const errorSources = Object.values(err.errors).map(item => {
        return {
            path: item === null || item === void 0 ? void 0 : item.path,
            message: item === null || item === void 0 ? void 0 : item.message
        };
    });
    return errorSources;
};
exports.default = handleValidationError;
