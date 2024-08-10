import { Request, Response } from 'express';
import RoomValidationSchema from './room.validation';
import { RoomServices } from './room.service';

const createRoom = async (req: Request, res: Response) => {
  try {
    const roomData = req.body;
    const validatedRoomData = RoomValidationSchema.parse(roomData);
    const result = await RoomServices.createRoomIntoDB(validatedRoomData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room added successfully',
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

export const RoomController = {
  createRoom,
};
