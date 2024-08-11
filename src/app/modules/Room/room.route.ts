import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.post('/', RoomController.createRoom);

router.get('/:id', RoomController.getSingleRoom);

router.get('/', RoomController.getAllRoom);

router.put('/:id', RoomController.updateRoom);

export const RoomRoutes = router;
