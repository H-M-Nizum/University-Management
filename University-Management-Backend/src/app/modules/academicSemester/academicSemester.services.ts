import config from '../../config';
import { TAcademicSemester } from './academicSemester.interface';
import AcademicSemesterModel from './academicSemester.model';

const createnewAcademicSemesterDataIntoDB = async (
  payload: TAcademicSemester
) => {
  //   create a academic semester data record
  const newAcademicSemesterData = await AcademicSemesterModel.create(payload);

  return newAcademicSemesterData;
};

// Export All Services
export const AcademicSemesterServices = {
  createnewAcademicSemesterDataIntoDB,
};
