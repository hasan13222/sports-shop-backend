import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { ProductServices } from './products.service';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    status: StatusCodes.CREATED,
    message: 'Product Added successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.updateProductIntoDB(productId, req.body);

  sendResponse(res, {
    status: StatusCodes.ACCEPTED,
    message: 'Product Updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.deleteProductIntoDB(productId);

  sendResponse(res, {
    status: StatusCodes.ACCEPTED,
    message: 'Product Deleted successfully',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductFromDB(req.query);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: 'All Products Retrieved successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: 'All Products Retrieved successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
};
