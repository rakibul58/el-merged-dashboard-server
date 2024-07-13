import express from 'express';

import { UserControllers } from './user.controller';


const router = express.Router();


router
  .route('/create-user')
 
  .post(
   // validateRequest(UserValidations.userRegisterValidationSchema),
    UserControllers.createUser,
  );

  router
  .route('/:email')
  .get(UserControllers.getSingleUserByEmail)

export const UserRoutes = router;
