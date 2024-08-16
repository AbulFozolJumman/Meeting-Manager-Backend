/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { RoomServices } from './room.service';
import { RoomValidation } from './room.validation';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createRoom = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (user.role !== 'admin') {
    return res.status(httpStatus.FORBIDDEN).json({
      success: false,
      statusCode: httpStatus.FORBIDDEN,
      message: 'Access denied. Only admins can create rooms.',
    });
  }

  const result = await RoomServices.createRoomIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room added successfully',
    data: result,
  });
});

const getSingleRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await RoomServices.getSingleRoomFromDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
      data: [],
    });
  }
};

const getAllRoom = async (req: Request, res: Response) => {
  try {
    const result = await RoomServices.getAllRoomFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Rooms retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
      data: [],
    });
  }
};

const updateRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const roomData = req.body;
    const validatedRoomData =
      RoomValidation.updateRoomValidationSchema.parse(roomData);
    const result = await RoomServices.updateRoomIntoDB(id, validatedRoomData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
      data: [],
    });
  }
};

const deleteRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await RoomServices.deleteRoomIntoDB(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room deleted successfully',
      data: result,
    });
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
  getSingleRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};
