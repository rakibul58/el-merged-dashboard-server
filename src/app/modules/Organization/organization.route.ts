import express from 'express';
import { OrganizationControllers } from './organization.controller';
import validateRequest from '../../middlewares/validateRequest';
import { OrganizationValidations } from './organization.validation';

const router = express.Router();


router
  .route('/')
  //.get(OrganizationControllers.getSingleOrganization)
  .post(
    validateRequest(OrganizationValidations.createOrganizationValidationSchema),
    OrganizationControllers.createOrganization,
  );
router
  .route('/:id')
  .get(OrganizationControllers.getSingleOrganization)
 

export const OrganizationRoutes = router;
