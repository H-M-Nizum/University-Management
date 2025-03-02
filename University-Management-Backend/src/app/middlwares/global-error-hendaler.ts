import { NextFunction, Request, Response } from 'express';

const globalErrorHandelar = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong!',
    error: err,
  });
};

export default globalErrorHandelar;
