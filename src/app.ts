import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

// Express app
const app: Application = express();

// CORS options
const corsOptions = {
  origin: [
    'https://meeting-manager-frontend.netlify.app',
    'https://meeting-manager-frontend-orcin.vercel.app',
    'http://localhost:5173',
  ],
  methods: 'GET,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Use CORS with specific options
app.use(cors(corsOptions));

// Parsers
app.use(express.json());

// Application route
app.use('/api', router);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Meeting manager backend is running...');
});

app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
