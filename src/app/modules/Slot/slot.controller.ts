/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
// import SlotValidationSchema from './slot.validation';
import { SlotService } from './slot.service';

const createSlot = async (req: Request, res: Response) => {
  try {
    const slotsData = req.body;
    // const validatedSlotsData = SlotValidationSchema.parse(slotsData);
    const result = await SlotService.createSlotsIntoDB(slotsData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Slots created successfully',
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

export const SlotController = {
  createSlot,
};
