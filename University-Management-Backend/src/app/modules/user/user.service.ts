import { object } from 'zod';
import config from '../../config';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { Tstudent } from '../student/student.interface';
import { studentModel } from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: Tstudent) => {
  //   Create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  //   if (!password) {
  //     user.password = config.default_pass as string;
  //   }else{
  //     user.password = password
  //   }
  userData.password = password || (config.default_pass as string);

  //  set student role
  userData.role = 'student';

  // set manually generated it
  userData.id = '203010001';
  //   create a user
  const newUser = await UserModel.create(userData);

  //   create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }

  return newUser;
};

// Export All Services
export const UserServices = {
  createStudentIntoDB,
};
