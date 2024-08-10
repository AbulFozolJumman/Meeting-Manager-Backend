import { Request, Response } from 'express';
import { UserServices } from './user.service';
import UserValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const validatedUserData = UserValidationSchema.parse(userData);
    const result = await UserServices.createUserIntoDB(validatedUserData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
      data: [],
    });
  }
};

export const UserController = {
  createUser,
};
