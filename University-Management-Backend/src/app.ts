import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandelar from './app/middlwares/global-error-hendaler';
import router from './app/routes';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// Application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Global Error Handaler
app.use(globalErrorHandelar);

export default app;
