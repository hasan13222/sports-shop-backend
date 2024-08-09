"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const products_validation_1 = require("./products.validation");
// import { upload } from '../../utils/sendImageToCloud';
const router = express_1.default.Router();
router.post('/', 
// upload.single('file'),
// (req: Request, res: Response, next: NextFunction) => {
//   req.body = JSON.parse(req.body.data);
//   next();
// },
(0, validateRequest_1.validateRequest)(products_validation_1.ProductValidations.createProductValidationSchema), products_controller_1.ProductControllers.createProduct);
router.patch('/:productId', 
// upload.single('file'),
// (req: Request, res: Response, next: NextFunction) => {
//   req.body = JSON.parse(req.body.data);
//   next();
// },
(0, validateRequest_1.validateRequest)(products_validation_1.ProductValidations.updateProductValidationSchema), products_controller_1.ProductControllers.updateProduct);
router.delete('/:productId', products_controller_1.ProductControllers.deleteProduct);
router.get('/', products_controller_1.ProductControllers.getAllProduct);
router.get('/:productId', products_controller_1.ProductControllers.getSingleProduct);
exports.ProductsRoutes = router;
