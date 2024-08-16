import { z } from 'zod';
import { Roles } from './user.enumeration';

export const registerUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email().min(9),
  password: z.string().min(8),
  phone: z.string().min(1),
  address: z.string().min(1),
  role: z.enum([Roles.admin, Roles.user]),
});

export const loginUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const UserValidation = {
  registerUserSchema,
  loginUserSchema,
};
