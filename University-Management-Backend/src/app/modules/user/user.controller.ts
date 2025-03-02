import { NextFunction, Request, Response } from 'express';
import userValidationSchema from './user.validation';
import { UserServices } from './user.service';

const createStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    // Validation using ZOD
    // const zodParseData = userValidationSchema.parse(userData);

    // Will call service function to send this data
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );
    // Send Response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createStudentController,
};
