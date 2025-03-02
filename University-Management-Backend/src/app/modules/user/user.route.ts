import express, { NextFunction, Request, Response } from 'express';
import { userController } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.validation';
import validationMiddleware from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validationMiddleware(studentValidations.createStudentValidationSchema),
  userController.createStudentController
);

export const UserRoutes = router;
