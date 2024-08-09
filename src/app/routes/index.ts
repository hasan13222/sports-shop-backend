import express from 'express';
import { ProductsRoutes } from '../modules/products/products.route';
import { CartsRoutes } from '../modules/cart/cart.route';

const router = express.Router();

// routers array
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

// project routes
moduleRouters.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
