import { model, Schema } from 'mongoose';
import { TBooking } from './booking.interface';

const BookingSchema = new Schema<TBooking>({
  room: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Room',
  },
  slots: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: 'Slot',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  isConfirmed: {
    type: String,
    enum: ['confirmed', 'unconfirmed', 'canceled'],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
});

const Booking = model<TBooking>('Booking', BookingSchema);

export default Booking;
