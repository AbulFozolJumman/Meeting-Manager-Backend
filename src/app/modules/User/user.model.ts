import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { Roles } from './user.enumeration';

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: Object.values(Roles),
  },
});

const User = model<TUser>('User', UserSchema);

export default User;
