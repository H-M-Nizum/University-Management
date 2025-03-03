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

const getAllAcademicSemesterController = catchAsync(async (req, res) => {
  // Will call service function to send this data
  const result =
    await AcademicSemesterServices.getAllAcademicSemesterDataIntoDB();
  // Send Response
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Successfully Get All Academic Semester Data',
    data: result,
  });
});

const getSingleAcademicSemesterController = catchAsync(async (req, res) => {
  // Get Data from query Params
  const { semesterId } = req.params;
  // Will call service function to send this data
  const result = await AcademicSemesterServices.getSingleAcademicSemesterIntoDB(
    semesterId
  );
  // Send Response
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Successfully Get Single Academic Semester Data',
    data: result,
  });
});

// update controller
const updateAcademicSemesterController = catchAsync(async (req, res) => {
  // Get Data from query Params
  const { semesterId } = req.params;
  const updatedData = req.body;
  // Will call service function to send this data
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    updatedData
  );
  // Send Response
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Successfully update Single Academic Semester Data',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemesterController,
  getAllAcademicSemesterController,
  getSingleAcademicSemesterController,
  updateAcademicSemesterController,
};
