import mongoose from "mongoose";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";



const createUserIntoDB = async (payload: IUser,) => {
    // create a user object
    const userData: Partial<IUser> = {};

    userData.role = payload.role;

    userData.email = payload.email;
    userData.name = payload.name;
    userData.phone = payload.phone;
    userData.organizationId = payload.organizationId;
    userData.isDeleted = payload.isDeleted;

  
    const session = await mongoose.startSession();
  
    try {
      session.startTransaction();
     
      // create a user 
      const newUser = await User.create([userData], { session }); 
  
      //create a student
      if (!newUser.length) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
      }
   
      await session.commitTransaction();
      await session.endSession();
      
    } catch (err: any) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(err);
    }
  };

  // get single user
  const getUserByEmail = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ email }).lean();
  };

  export const UserServices = {
    createUserIntoDB,
    getUserByEmail
   
  };