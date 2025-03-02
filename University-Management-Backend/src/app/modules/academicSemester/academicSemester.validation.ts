import { string, z } from 'zod';
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterNames,
} from './academicSemester.conostant';

const CreateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNames] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]]),
    endMonth: z.enum([...AcademicSemesterMonths] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidations = {
  CreateAcademicSemesterValidationSchema,
};
