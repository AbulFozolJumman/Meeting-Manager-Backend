import { RoomServices } from './room.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.createRoomIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room added successfully',
    data: result,
  });
});

const getSingleRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.getSingleRoomFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room retrieved successfully',
    data: result,
  });
});

const getAllRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.getAllRoomFromDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rooms retrieved successfully',
    data: result,
  });
});

const updateRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.updateRoomIntoDB(req.params.id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room updated successfully',
    data: result,
  });
});

const deleteRoom = catchAsync(async (req, res) => {
  const result = await RoomServices.deleteRoomIntoDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Room deleted successfully',
    data: result,
  });
});

export const RoomController = {
  createRoom,
  getSingleRoom,
  getAllRoom,
  updateRoom,
  deleteRoom,
};
