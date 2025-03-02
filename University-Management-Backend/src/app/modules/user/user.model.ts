import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    needsPasseordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware / Hooks
// schema_name.pre('event_name', function(){})

// Will work on create() or save() function or method
// pre save middleware / hook
userSchema.pre('save', async function (next) {
  // console.log(this, 'Pre hook : we will save data');
  const haspassword = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );

  this.password = haspassword;

  console.log(haspassword, 'This is hasing password --------------');
  next();
});

// post save middleware / hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  console.log(
    doc.password,
    'Post hook : Replace password with empty string after save in database.'
  );
  next();
});

export const UserModel = model<TUser>('User', userSchema);
