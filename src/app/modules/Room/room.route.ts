import express from 'express';
import { RoomController } from './room.controller';
import auth from '../../middlewares/auth';
import { Roles } from '../User/user.enumeration';
import { RoomValidation } from './room.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(RoomValidation.createRoomValidationSchema),
  auth(Roles.admin),
  RoomController.createRoom,
);

router.get('/:id', RoomController.getSingleRoom);

router.get('/', RoomController.getAllRoom);

router.put(
  '/:id',
  auth(Roles.admin),
  validateRequest(RoomValidation.updateRoomValidationSchema),
  RoomController.updateRoom,
);

router.delete('/:id', auth(Roles.admin), RoomController.deleteRoom);

export const RoomRoutes = router;
