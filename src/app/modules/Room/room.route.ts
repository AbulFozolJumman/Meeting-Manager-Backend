import express from 'express';
import { RoomController } from './room.controller';
import auth from '../../middlewares/auth';
import { Roles } from '../User/user.enumeration';

const router = express.Router();

router.post('/', auth(Roles.admin), RoomController.createRoom);

router.get('/:id', RoomController.getSingleRoom);

router.get('/', RoomController.getAllRoom);

router.put('/:id', RoomController.updateRoom);

router.delete('/:id', RoomController.deleteRoom);

export const RoomRoutes = router;
