# Meeting-Manager-Backend

## Project Overview

The Meeting Manager is a backend service designed to handle room slot bookings for meeting. It includes functionalities for managing users, rooms, slots, and bookings. The project is built using Express.js, Mongoose, Zod for validation, and npm as the package manager.

## Features

- **User Management**: Supports role-based access control (Admin, User).
- **Room Management**: Allows admins to create, view, update, and delete rooms.
- **Slot Management**: Admins can create slots, and users can view available slots.
- **Booking Management**: Users can book and see their bookings. Admins can view, update, delete bookings.

## Server link - https://meeting-manager-backend-seven.vercel.app/

## API Endpoints

### User

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Authenticate a user.(You will get a token)

### Authorization

- `Bearer <your auth token>` : In Postman, select Auth Type - Bearer Token and give the token you got while login

### Rooms

- `POST /api/rooms`: Create a new room (Admin only).
- `GET /api/rooms`: Retrieve all rooms.
- `GET /api/rooms/:id`: Retrieve single room.
- `PUT /api/rooms/:id`: Update a room (Admin only).
- `DELETE /api/rooms/:id`: Soft delete a room (Admin only).

### Slots

- `POST /api/slots`: Create slots for a room (Admin only).
- `GET /api/slots/availability`: Get available slots for a specific room. You can also query by date & roomId.

### Bookings

- `POST /api/bookings`: Book a room (User only).
- `GET /api/bookings`: Get all bookings (Admin only).
- `GET /api/bookings/my-bookings`: Get bookings for the logged-in user.
- `PUT /api/bookings/:id`: Update single booking (Admin only).
- `DELETE /api/bookings/:id`: Soft delete single booking (Admin only).

## Getting started locally

### 1. Clone the Repository

```bash
git clone https://github.com/AbulFozolJumman/Meeting-Manager-Backend.git
```

### 2. Install Dependencies

Use npm to install the necessary dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and configure the following environment variables:

```env
NODE_ENV=development
PORT=2024
DATABASE_URL
BCRYPT_SALT_ROUND
JWT_ACCESS_SECRET
JWT_REFRESH_SECRET
JWT_ACCESS_EXPIRES_IN
JWT_REFRESH_EXPIRES_IN
```

### 5. Start the Development Server

To start the server in development mode:

```bash
npm run build
npm run start:dev
```

```browser
http://localhost:2024/
```
