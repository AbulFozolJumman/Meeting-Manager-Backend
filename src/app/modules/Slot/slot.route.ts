import express from 'express';
import { SlotController } from './slot.controller';
import auth from '../../middlewares/auth';
import { Roles } from '../User/user.enumeration';
import validateRequest from '../../middlewares/validateRequest';
import SlotValidationSchema from './slot.validation';

const router = express.Router();

router.post(
  '/',
  auth(Roles.admin),
  validateRequest(SlotValidationSchema),
  SlotController.createSlot,
);

router.get('/availability', SlotController.getAvailableSlots);

export const SlotRoutes = router;
