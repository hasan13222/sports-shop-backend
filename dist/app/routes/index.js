"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_route_1 = require("../modules/products/products.route");
const cart_route_1 = require("../modules/cart/cart.route");
const router = express_1.default.Router();
// routers array
const moduleRouters = [
    {
        path: '/products',
        routes: products_route_1.ProductsRoutes,
    },
    {
        path: '/cart',
        routes: cart_route_1.CartsRoutes,
    },
];
// project routes
moduleRouters.forEach((route) => {
    router.use(route.path, route.routes);
});
exports.default = router;
