import express from 'express';
import { CartControllers } from './cart.controller';

const router = express.Router();

router.post('/', CartControllers.getProductByIds);

export const CartsRoutes = router;
