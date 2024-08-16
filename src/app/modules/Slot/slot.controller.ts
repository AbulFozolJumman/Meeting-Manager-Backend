import { SlotService } from './slot.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotService.createSlotsIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const { date, roomId } = req.query;
  const result = await SlotService.getAvailableSlotsFromDB(
    date as string,
    roomId as string,
  );
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const SlotController = {
  createSlot,
  getAvailableSlots,
};
