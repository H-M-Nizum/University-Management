import { Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type StudentName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Tstudent = {
  id: string;
  user: Types.ObjectId;
  name: StudentName;
  email: string;
  age: number;
  contactNo: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  // bloodGroup field is not require because of ? sgin
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localaddress: LocalGuardian;
  profileimg?: string;
  isDeleted: boolean;
};
