import express from 'express';
import { BookingController } from './booking.controller';

const router = express.Router();

router.post('/', BookingController.createBooking);
router.get('/', BookingController.getAllBooking);
router.get('/', BookingController.getUserBooking);

export const BookingRoutes = router;
