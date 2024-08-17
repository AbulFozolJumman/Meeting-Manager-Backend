import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { RoomRoutes } from '../modules/Room/room.route';
import { SlotRoutes } from '../modules/Slot/slot.route';
import { BookingRoutes } from '../modules/Booking/booking.route';
import { MyBookingsRoute } from '../modules/Booking/myBookings.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/rooms',
    route: RoomRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/my-bookings',
    route: MyBookingsRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
