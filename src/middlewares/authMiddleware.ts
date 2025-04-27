import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export interface AuthenticatedRequest extends Request {
  userId?: number;
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user: any) => {
    if (err) {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }
    req.userId = user.userId;
    next();
  });
};
