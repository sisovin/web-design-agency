import { Request, Response, NextFunction } from 'express';

interface Error {
  status?: number;
  message?: string;
  name?: string;
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';

  res.status(status).json({
    status,
    message,
    error: err.name || 'Error',
  });
};
