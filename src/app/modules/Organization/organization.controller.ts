import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrganizationServices } from './organization.service';

// Organization controllers

const createOrganization = catchAsync(async (req, res) => {
  const result = await OrganizationServices.createOrganizationIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Organization created successfully',
    data: result,
  });
});


const getSingleOrganization = catchAsync(async (req, res) => {
  const result = await OrganizationServices.getSingleOrganizationFromDB(
    req.params.id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A Organization retrieved successfully',
    data: result,
  });
});

export const OrganizationControllers = {
  createOrganization,
  getSingleOrganization,
};
