import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes as apiRoutes } from '../src/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Base Route
app.get('/api', (req: Request, res: Response) => {
  res.json({ status: 'Impostor Backend API is running successfully on Vercel!' });
});

app.use('/api', apiRoutes);

// Export the express app for Vercel
module.exports = app;
