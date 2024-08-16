import { model, Schema } from 'mongoose';
import { TSlot } from './slot.interface';

const SlotSchema = new Schema<TSlot>(
  {
    room: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Room',
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
  },
);

const Slot = model<TSlot>('Slot', SlotSchema);
export default Slot;
