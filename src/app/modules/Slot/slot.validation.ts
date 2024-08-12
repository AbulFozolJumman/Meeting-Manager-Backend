import { Types } from 'mongoose';
import { z } from 'zod';

const SlotValidationSchema = z.object({
  room: z.custom<Types.ObjectId>(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Invalid date format. Expected 'YYYY-MM-DD'.",
  }),
  startTime: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
    message: "Invalid time format. Expected 'HH:MM'.",
  }),
  endTime: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
    message: "Invalid time format. Expected 'HH:MM'.",
  }),
  isBooked: z.boolean().default(false),
});

export default SlotValidationSchema;
