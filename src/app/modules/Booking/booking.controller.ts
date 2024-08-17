import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingService } from './booking.service';

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

const deleteBooking = catchAsync(async (req, res) => {
  const result = await BookingService.deleteBookingIntoDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking deleted successfully',
    data: result,
  });
});

const getUserBooking = catchAsync(async (req, res) => {
  const result = await BookingService.getUserBookingsFromDB(req.user.userId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User bookings retrieved successfully',
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBooking,
  getUserBooking,
  updateBooking,
  deleteBooking,
};
