import { model, Schema } from 'mongoose';
import { TSlot } from './slot.interface';

const SlotSchema = new Schema<TSlot>({
  room: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  isBooked: {
    type: Boolean,
    required: true,
  },
});

const Slot = model<TSlot>('Slot', SlotSchema);
export default Slot;
