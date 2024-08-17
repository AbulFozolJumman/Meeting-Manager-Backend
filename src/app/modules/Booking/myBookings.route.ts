import express from 'express';
import auth from '../../middlewares/auth';
import { Roles } from '../User/user.enumeration';
import { BookingController } from './booking.controller';

const router = express.Router();

router.get('/', auth(Roles.user), BookingController.getUserBooking);

export const MyBookingsRoute = router;
