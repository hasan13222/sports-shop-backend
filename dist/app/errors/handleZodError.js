"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// zod validation error
const handleZodError = (error) => {
    const errorSources = error.issues.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[issue.path.length - 1],
            message: issue.message,
        };
    });
    return errorSources;
};
exports.default = handleZodError;
