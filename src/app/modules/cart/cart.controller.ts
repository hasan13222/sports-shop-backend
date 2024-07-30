import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { CartServices } from './cart.service';

const getProductByIds = catchAsync(async (req: Request, res: Response) => {
  const result = await CartServices.getProductsByIdsFromDB(req.body);

  sendResponse(res, {
    status: StatusCodes.OK,
    message: 'Cart Products Retrieved successfully',
    data: result,
  });
});

export const CartControllers = {
  getProductByIds,
};
