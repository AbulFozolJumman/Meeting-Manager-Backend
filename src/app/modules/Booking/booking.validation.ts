import { Types } from 'mongoose';
import { z } from 'zod';

const ObjectIdSchema = z.custom<Types.ObjectId>();

const BookingValidationSchema = z.object({
  room: ObjectIdSchema,
  slots: z.array(ObjectIdSchema),
  user: ObjectIdSchema,
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Invalid date format. Expected 'YYYY-MM-DD'.",
  }),
  isConfirmed: z
    .enum(['confirmed', 'unconfirmed', 'canceled'])
    .default('unconfirmed'),
  isDeleted: z.boolean().default(false),
});

export default BookingValidationSchema;
