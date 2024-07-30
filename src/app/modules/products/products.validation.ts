import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    brand: z.string(),
    stock: z.number(),
    rating: z.number(),
    price: z.number(),
    image: z.string().optional(),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    brand: z.string().optional(),
    stock: z.number().optional(),
    rating: z.number().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
