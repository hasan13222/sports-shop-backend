import express from 'express';
import { ProductsRoutes } from '../modules/products/products.route';
import { CartsRoutes } from '../modules/cart/cart.route';

const router = express.Router();

const moduleRouters = [
  {
    path: '/products',
    routes: ProductsRoutes,
  },
  {
    path: '/cart',
    routes: CartsRoutes,
  },
];

moduleRouters.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
