import { NextFunction, Request, RequestHandler, Response } from 'express';

import sendResponse from '../../utils/send-response';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.services';

const createAcademicSemesterController = catchAsync(async (req, res) => {
  // Will call service function to send this data
  const result =
    await AcademicSemesterServices.createnewAcademicSemesterDataIntoDB(
      req.body
    );
  // Send Response
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Successfully Academic Semester is Created',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemesterController,
};
