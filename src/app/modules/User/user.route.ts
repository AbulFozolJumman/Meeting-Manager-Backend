import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.registerUserSchema),
  UserController.registerUser,
);
router.post(
  '/login',
  validateRequest(UserValidation.loginUserSchema),
  UserController.loginUser,
);

export const UserRoutes = router;
