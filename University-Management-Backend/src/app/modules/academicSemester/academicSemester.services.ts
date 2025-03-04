import config from '../../config';
import { TAcademicSemester } from './academicSemester.interface';
import AcademicSemesterModel from './academicSemester.model';

// Create Academic Semester Services
const createnewAcademicSemesterDataIntoDB = async (
  payload: TAcademicSemester
) => {
  //   create a academic semester data record
  const newAcademicSemesterData = await AcademicSemesterModel.create(payload);

  return newAcademicSemesterData;
};

// Get All Academic Semester
const getAllAcademicSemesterDataIntoDB = async () => {
  const allAcademicSemesterData = await AcademicSemesterModel.find();
  return allAcademicSemesterData;
};

// Get Single Academic Semester
const getSingleAcademicSemesterIntoDB = async (_id: string) => {
  const singleAcademicSemesterData = await AcademicSemesterModel.findOne({
    _id,
  });
  return singleAcademicSemesterData;
};

// Update Single Academic Semester
const updateAcademicSemesterIntoDB = async (_id: string, updatedData: any) => {
  // Find and update the semester
  const updatedSemester = await AcademicSemesterModel.findByIdAndUpdate(
    _id,
    updatedData
  );
  return updatedData;
};

// Export All Services
export const AcademicSemesterServices = {
  createnewAcademicSemesterDataIntoDB,
  getAllAcademicSemesterDataIntoDB,
  getSingleAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
