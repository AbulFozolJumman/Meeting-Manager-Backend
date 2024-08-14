import Booking from './booking.model';
import Slot from '../Slot/slot.model';
import Room from '../Room/room.model';
import { TBooking } from './booking.interface';

const createBookingIntoDB = async (bookingData: TBooking) => {
  const { room, slots, user, date } = bookingData;

  // Ensure the room is found
  const roomDetails = await Room.findById(room);
  if (!roomDetails) {
    throw new Error('Room not found');
  }

  // Update each slot as booked
  await Slot.updateMany(
    { _id: { $in: slots }, room: room, date: date },
    { isBooked: true },
  );

  // Calculate total amount based on pricePerSlot and number of slots
  const totalAmount = 200;

  if (!totalAmount || isNaN(totalAmount)) {
    throw new Error('Invalid totalAmount calculation');
  }

  // Create booking
  const booking = await Booking.create({
    date,
    slots,
    room,
    user,
    totalAmount,
    isConfirmed: 'unconfirmed',
  });

  // Populate room, slots, and user details for the response
  const populatedBooking = await booking.populate('room user slot');

  return populatedBooking;
};

export const BookingService = {
  createBookingIntoDB,
};
