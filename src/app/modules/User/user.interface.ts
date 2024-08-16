import { Roles } from './user.enumeration';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: number;
  address: string;
  role: Roles;
};
