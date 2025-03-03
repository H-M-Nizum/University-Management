import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterNames,
  validNameCodeMap,
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

// Handle academic semester logical validation
AcademicSemesterSchema.pre('save', async function (next) {
  // There cannot be more than one semester with the same name in the same academic year.
  const isSemesterExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExists) {
    throw new Error('Semester is Already exists in this year !');
  }

  // Ensure name and code match correctly
  if (validNameCodeMap[this.name] !== this.code) {
    throw new Error(
      `Invalid semester code for ${this.name}. Expected: ${
        validNameCodeMap[this.name]
      }`
    );
  }

  next();
});

// Create academic semester model
const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema
);

export default AcademicSemesterModel;
