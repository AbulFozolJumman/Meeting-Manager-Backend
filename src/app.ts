import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';

// Express app
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Application route
app.use('/api', router);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Meeting manager backend is running...');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
