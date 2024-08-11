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

export const RoomServices = {
  createRoomIntoDB,
  getSingleRoomFromDB,
  getAllRoomFromDB,
};
