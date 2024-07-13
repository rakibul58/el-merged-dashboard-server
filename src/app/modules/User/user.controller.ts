import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";


const createUser = catchAsync(async (req, res) => {
    const user  = req.body;
  
    const result = await UserServices.createUserIntoDB(
        user,
    );
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  });

  const getSingleUserByEmail = catchAsync(async (req, res) => {
    const { email } = req.params;
    const user = await UserServices.getUserByEmail(email);
  
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'User not found',
      });
    }
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieved successfully',
      data: user,
    });
  });

  export const UserControllers = {
    createUser,
    getSingleUserByEmail
  };