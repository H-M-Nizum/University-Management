import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterNames,
} from './academicSemester.conostant';

const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: AcademicSemesterNames,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterCodes,
    required: true,
  },
  startMonth: {
    type: String,
    enum: AcademicSemesterMonths,
    required: true,
  },
  endMonth: {
    type: String,
    enum: AcademicSemesterMonths,
    required: true,
  },
});

// Create academic semester model
const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema
);

export default AcademicSemester;
