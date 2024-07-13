/* eslint-disable @typescript-eslint/no-this-alias */

import { Schema, model } from 'mongoose';

import { userTypes } from './user.constant';
import { IUser, UserModel } from './user.interface';

// user schema
const userSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      required: true,
      type: String,
      enum: userTypes,
    },
    phone: {
      type: String,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  /*   address: {
      type: String,
      required: true,
    }, */
  },
  {
    timestamps: true,
  },
);

// hashing the password before entering into db
// userSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;

//   user.password = await bcrypt.hash(
//     user.password as string,
//     Number(config.bcrypt_salt_rounds),
//   );

//   next();
// });

// removing password after response
// userSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// checking if user exists by email
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

// comparing passwords
// userSchema.statics.isPasswordMatched = async function (
//   plainTextPassword,
//   hashedPassword,
// ) {
//   return await bcrypt.compare(plainTextPassword, hashedPassword);
// };

export const User = model<IUser, UserModel>('User', userSchema);
