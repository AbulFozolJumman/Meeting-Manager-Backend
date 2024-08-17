import express from 'express';
import { BookingController } from './booking.controller';
import auth from '../../middlewares/auth';
import { Roles } from '../User/user.enumeration';
import validateRequest from '../../middlewares/validateRequest';
import BookingValidationSchema from './booking.validation';

const router = express.Router();

router.post(
  '/',
  auth(Roles.user),
  validateRequest(BookingValidationSchema),
  BookingController.createBooking,
);
router.get('/', auth(Roles.admin), BookingController.getAllBooking);
router.put('/:id', auth(Roles.admin), BookingController.updateBooking);
router.get('/:id', BookingController.getUserBooking);

export const BookingRoutes = router;
