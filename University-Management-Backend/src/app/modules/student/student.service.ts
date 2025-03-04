import { Tstudent } from './student.interface';
import { studentModel } from './student.model';

// Get All Student Service
const GetStudentIntoDB = async () => {
  const result = await studentModel.find();
  return result;
};

// Get Single Student Service
const GetSingleStudentIntoDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};

// Soft delete one student
const DeleteSingleStudetnIntoDB = async (id: string) => {
  const resutl = await studentModel.updateOne({ id }, { isDeleted: true });
  return resutl;
};

// Export All Services
export const StudentServices = {
  GetStudentIntoDB,
  GetSingleStudentIntoDB,
  DeleteSingleStudetnIntoDB,
};
