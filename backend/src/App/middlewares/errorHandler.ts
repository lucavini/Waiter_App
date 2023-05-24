import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error('### Error handler');
  console.error(error);

  res.sendStatus(500);

  next();
};

export default errorHandler;
