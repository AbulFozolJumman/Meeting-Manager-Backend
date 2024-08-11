import { TRoom } from './room.interface';
import Room from './room.model';

const createRoomIntoDB = async (roomData: TRoom) => {
  const result = await Room.create(roomData);
  return result;
};

const getSingleRoomFromDB = async (id: string) => {
  const result = await Room.findById(id);
  return result;
};

const getAllRoomFromDB = async () => {
  const result = await Room.find();
  return result;
};

const updateRoomIntoDB = async (id: string, roomData: Partial<TRoom>) => {
  const result = await Room.findByIdAndUpdate(id, roomData, { new: true });
  return result;
};

const deleteRoomIntoDB = async (id: string) => {
  const result = await Room.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const RoomServices = {
  createRoomIntoDB,
  getSingleRoomFromDB,
  getAllRoomFromDB,
  updateRoomIntoDB,
  deleteRoomIntoDB,
};
