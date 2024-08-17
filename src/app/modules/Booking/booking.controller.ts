/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingService } from './booking.service';
import { Request, Response } from 'express';

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBookingIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingService.getAllBookingsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const updateBooking = catchAsync(async (req, res) => {
  const result = await BookingService.updateBookingIntoDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking updated successfully',
    data: result,
  });
});

const getUserBooking = async (req: Request, res: Response) => {
  try {
    const userId = req.user._id;
    const result = await BookingService.getUserBookingsFromDB(userId);
    res.status(200).json({
      success: true,
      statusCode: httpStatus.OK,
      message: 'User bookings retrieved successfully',
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
  getAllBooking,
  getUserBooking,
  updateBooking,
};
