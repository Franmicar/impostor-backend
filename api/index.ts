import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ status: 'Impostor Backend API is running successfully on Vercel Native Serverless!' });
}
