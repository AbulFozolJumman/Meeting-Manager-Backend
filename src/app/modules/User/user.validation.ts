import { z } from 'zod';
import { Roles } from './user.enumeration';

const UserValidationSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(9),
  password: z.string().min(8),
  phone: z.number().min(1),
  address: z.string().min(1),
  role: z.enum([Roles.ADMIN, Roles.USER]),
});

export default UserValidationSchema;
