import { Types } from 'mongoose';
import { z } from 'zod';

const BookingValidationSchema = z.object({
  room: z.custom<Types.ObjectId>(),
  slots: z.array(z.custom<Types.ObjectId>()),
  user: z.custom<Types.ObjectId>(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Invalid date format. Expected 'YYYY-MM-DD'.",
  }),
  totalAmount: z.number(),
  isConfirmed: z.enum(['confirmed', 'unconfirmed', 'canceled']),
  isDeleted: z.boolean().default(false),
});

export default BookingValidationSchema;
