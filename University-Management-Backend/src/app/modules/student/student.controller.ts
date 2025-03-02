import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/send-response';
import status from 'http-status';

// Get all Student Controller
const GetAllStudent = catchAsync(async (req, res) => {
  // Call Services Function
  const resultData = await StudentServices.GetStudentIntoDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Successfully Get All Student Data',
    data: resultData,
  });
});

// Get Single Student Data
const GetSingleStudent = catchAsync(async (req, res) => {
  const { studentID } = req.params;
  const resultData = await StudentServices.GetSingleStudentIntoDB(studentID);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Successfully Get Single Student Data',
    data: resultData,
  });
});

export const studentController = {
  GetAllStudent,
  GetSingleStudent,
};
