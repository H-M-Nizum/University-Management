import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';

const router = express.Router();

const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('I am a Validation Middleware. ');
};

router.post(
  '/create-student',
  validationMiddleware,
  userController.createStudentController
);

export const UserRoutes = router;
