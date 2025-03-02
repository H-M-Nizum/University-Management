import { NextFunction, Request, RequestHandler, Response } from 'express';
import userValidationSchema from './user.validation';
import { UserServices } from './user.service';
import sendResponse from '../../utils/send-response';
import status from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudentController = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  // Will call service function to send this data
  const result = await UserServices.createStudentIntoDB(password, studentData);
  // Send Response
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: '',
    data: result,
  });
});

export const userController = {
  createStudentController,
};
