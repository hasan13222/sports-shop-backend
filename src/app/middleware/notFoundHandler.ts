import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// unknown route handler
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).send({
    success: false,
    message: 'Route not found',
  });
};
