import { z } from 'zod';

const BookingValidationSchema = z.object({
  room: z.string(),
  slots: z.array(z.string()),
  user: z.string(),
  date: z.date(),
  totalAmount: z.number(),
  isConfirmed: z.enum(['confirmed', 'unconfirmed', 'canceled']),
  isDeleted: z.boolean(),
});

export default BookingValidationSchema;
