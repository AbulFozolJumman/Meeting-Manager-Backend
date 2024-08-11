import { z } from 'zod';

const SlotValidationSchema = z.object({
  room: z.string(),
  date: z.date(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.boolean().default(false),
});

export default SlotValidationSchema;
