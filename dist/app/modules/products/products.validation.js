"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        category: zod_1.z.string(),
        brand: zod_1.z.string(),
        stock: zod_1.z.number(),
        rating: zod_1.z.number(),
        price: zod_1.z.number(),
        image: zod_1.z.string().optional(),
    }),
});
const updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        stock: zod_1.z.number().optional(),
        rating: zod_1.z.number().optional(),
        price: zod_1.z.number().optional(),
        image: zod_1.z.string().optional(),
    }),
});
exports.ProductValidations = {
    createProductValidationSchema,
    updateProductValidationSchema,
};
