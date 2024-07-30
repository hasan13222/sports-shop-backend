import express from 'express';
import { ProductControllers } from './products.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { ProductValidations } from './products.validation';
// import { upload } from '../../utils/sendImageToCloud';

const router = express.Router();

router.post(
  '/',
  // upload.single('file'),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

router.patch(
  '/:productId',
  // upload.single('file'),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  validateRequest(ProductValidations.updateProductValidationSchema),
  ProductControllers.updateProduct,
);

router.delete('/:productId', ProductControllers.deleteProduct);

router.get('/', ProductControllers.getAllProduct);
router.get('/:productId', ProductControllers.getSingleProduct);

export const ProductsRoutes = router;
