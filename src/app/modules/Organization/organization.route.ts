import express from 'express';
import { OrganizationControllers } from './organization.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OrganizationValidations } from './organization.validation';

const router = express.Router();

router
  .route('/')
  .get(OrganizationControllers.getSingleOrganization)
  .post(
    validateRequest(OrganizationValidations.createOrganizationValidationSchema),
    OrganizationControllers.createOrganization,
  );

export const OrganizationRoutes = router;
