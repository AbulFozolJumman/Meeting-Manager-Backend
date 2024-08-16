import config from '../../config';
import { createToken } from '../../utils/jwt';
import { TUser } from './user.interface';
import User from './user.model';
import bcrypt from 'bcrypt';

const registerUserIntoDB = async (userData: TUser) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new User({ ...userData, password: hashedPassword });
  await user.save();

  // Select all fields except password
  const userWithoutPassword = await User.findById(user._id).select('-password');
  return userWithoutPassword;
};

const loginUserFromDB = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  // Validate the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT tokens
  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  const userWithoutPassword = await User.findById(user._id).select('-password');

  return {
    accessToken,
    refreshToken,
    user: userWithoutPassword,
  };
};

export const UserServices = {
  registerUserIntoDB,
  loginUserFromDB,
};
