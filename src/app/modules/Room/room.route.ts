import express from 'express';
import { RoomController } from './room.controller';

const router = express.Router();

router.post('/', RoomController.createRoom);

router.get('/:id', RoomController.getSingleRoom);

export const RoomRoutes = router;
