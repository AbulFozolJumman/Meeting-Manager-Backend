import { z } from 'zod';

const SlotValidationSchema = z.object({
  room: z.string(),
  date: z.date(),
  startTime: z.date(),
  endTime: z.date(),
  isBooked: z.boolean(),
});

export default SlotValidationSchema;
