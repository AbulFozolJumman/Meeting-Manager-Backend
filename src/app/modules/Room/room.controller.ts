/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { RoomServices } from './room.service';
import { RoomValidation } from './room.validation';

const createRoom = async (req: Request, res: Response) => {
  try {
    const roomData = req.body;
    const validatedRoomData =
      RoomValidation.createRoomValidationSchema.parse(roomData);
    const result = await RoomServices.createRoomIntoDB(validatedRoomData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Room added successfully',
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

export const RoomController = {
  createRoom,
  getSingleRoom,
  getAllRoom,
  updateRoom,
};
