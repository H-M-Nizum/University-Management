import { Schema, model } from 'mongoose';
import {
  Tstudent,
  StudentName,
  Guardian,
  LocalGuardian,
} from './student.interface';
import validator from 'validator';

// 2. Create a Schema corresponding to the document interface.
const studentNameSchema = new Schema<StudentName>({
  firstName: {
    type: String,
    // Custom Validator
    validate: {
      validator: function (value: string) {
        const firstNameStr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return firstNameStr === value;
      },
      message: '{VALUE} is not in Capitalize format.',
    },
    required: true,
  },
  middleName: { type: String },
  lastName: {
    type: String,
    // Use Third party validator
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} Is not Valid Alpha Format',
    },
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});
const studentSchema = new Schema<Tstudent>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'UserModel',
    },
    name: {
      type: studentNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: { type: Number, required: true },
    contactNo: {
      type: String,
      validate: {
        // Custom Validator
        validator: function (value: string) {
          return /\d{3}-\d{3}-\d{4}/.test(value);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, 'User phone number required'],
    },
    dateOfBirth: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localaddress: {
      type: localGuardianSchema,
      required: true,
    },
    profileimg: { type: String },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    // only for virtual data
    toJSON: { virtuals: true },
  }
);

// // Virtual - add new field that field show only client site and store in database.
studentSchema.virtual('fullname').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// // Query Middleware
// Get only those data that isDeleted field not equal to true
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
// For single data, get only isDeleted false data
studentSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});
// 3. Create a Model.
export const studentModel = model<Tstudent>('Student', studentSchema);
