import { Roles } from './user.enumeration';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: Roles;
};
