import express, { NextFunction, Request, Response } from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidations } from './academicSemester.validation';
import validationMiddleware from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationMiddleware(
    AcademicSemesterValidations.CreateAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemesterController
);

router.get('/', AcademicSemesterController.getAllAcademicSemesterController);
router.get(
  '/:semesterId',
  AcademicSemesterController.getSingleAcademicSemesterController
);

export const AcademicSemesterRoutes = router;
