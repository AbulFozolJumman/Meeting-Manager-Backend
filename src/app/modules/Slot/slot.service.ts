import { TSlot } from './slot.interface';
import Slot from './slot.model';

const createSlotsIntoDB = async (slotData: TSlot) => {
  const { room, date, startTime, endTime } = slotData;

  const slotDuration = 60; // 60 minutes
  const startMinutes =
    parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
  const endMinutes =
    parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);

  const totalDuration = endMinutes - startMinutes;
  const numSlots = totalDuration / slotDuration;

  const slots = [];

  for (let i = 0; i < numSlots; i++) {
    const slotStartMinutes = startMinutes + i * slotDuration;
    const slotEndMinutes = slotStartMinutes + slotDuration;

    const slotStartTime = `${String(Math.floor(slotStartMinutes / 60)).padStart(
      2,
      '0',
    )}:${String(slotStartMinutes % 60).padStart(2, '0')}`;
    const slotEndTime = `${String(Math.floor(slotEndMinutes / 60)).padStart(
      2,
      '0',
    )}:${String(slotEndMinutes % 60).padStart(2, '0')}`;

    const slot = new Slot({
      room,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
    });

    slots.push(slot);
  }

  await Slot.insertMany(slots);
  return slots;
};

const getAllSlotFromDB = async () => {
  const result = await Slot.find().populate('room');
  return result;
};

export const SlotService = {
  createSlotsIntoDB,
  getAllSlotFromDB,
};
