/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookingService } from './booking.service';
import BookingValidationSchema from './booking.validation';
import { Request, Response } from 'express';

const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body;
    const validateBookingData = BookingValidationSchema.parse(bookingData);
    const result =
      await BookingService.createBookingIntoDB(validateBookingData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Booking created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
      data: [],
    });
  }
};

export const BookingController = {
  createBooking,
};
