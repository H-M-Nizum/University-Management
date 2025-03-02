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
    type: String,
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
const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema
);

export default AcademicSemesterModel;
