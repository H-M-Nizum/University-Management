import { z } from 'zod';

// Define Zod schemas for nested objects
const studentNameValidationSchema = z.object({
  firstName: z.string().refine(
    (value) => {
      const firstNameStr =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      return firstNameStr === value;
    },
    { message: 'First name must be in capitalize format.' }
  ),
  middleName: z.string().optional(),
  lastName: z.string().refine((value) => /^[A-Za-z]+$/.test(value), {
    message: 'Last name must contain only alphabets.',
  }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localguardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define the main Zod schema for StudentInterface
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: studentNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      email: z.string().email(),
      age: z.number(),
      contactNo: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, {
        message: 'Phone number must be in the format XXX-XXX-XXXX.',
      }),
      dateOfBirth: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localaddress: localguardianValidationSchema,
      profileimg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
