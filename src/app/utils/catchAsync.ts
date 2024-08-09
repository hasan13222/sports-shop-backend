import { NextFunction, Request, RequestHandler, Response } from 'express';

// function to handle error in async function
export const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};