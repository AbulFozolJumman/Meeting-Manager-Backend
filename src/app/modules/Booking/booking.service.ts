import Booking from './booking.model';
import Slot from '../Slot/slot.model';
import Room from '../Room/room.model';
import { TBooking } from './booking.interface';
import User from '../User/user.model';

const createBookingIntoDB = async (bookingData: TBooking) => {
  const { date, slots, room, user } = bookingData;

  // Check if user exist
  const isUserExists = await User.findById(user);
  if (!isUserExists) {
    throw new Error('User not found');
  }

  // Find the room to get the price per slot
  const roomDetails = await Room.findById(room);
  if (!roomDetails) {
    throw new Error('Room not found');
  }

  // Calculate total amount based on pricePerSlot and number of slots
  const totalAmount = roomDetails.pricePerSlot * slots.length;

  // Update each slot as booked
  await Slot.updateMany(
    { _id: { $in: slots }, room: room },
    { isBooked: true },
  );

  // Create booking
  const booking = await Booking.create({
    date,
    slots,
    room,
    user,
    totalAmount,
    isConfirmed: 'unconfirmed',
  });

  const populatedBooking = await (
    await (await booking.populate('room')).populate('slots')
  ).populate('user');

  return populatedBooking;
};

const getAllBookingsFromDB = async () => {
  const result = await Booking.find().populate('user slots room');
  return result;
};

const getUserBookingsFromDB = async (id: string) => {
  const result = await Booking.find({ user: id }).populate('slots room');
  return result;
};

// Update Booking(validation, service, controller, route)
const updateBookingIntoDB = async (
  id: string,
  bookingData: Partial<TBooking>,
) => {
  const result = await Booking.findByIdAndUpdate(id, bookingData, {
    new: true,
  });
  return result;
};

export const BookingService = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getUserBookingsFromDB,
  updateBookingIntoDB,
};
