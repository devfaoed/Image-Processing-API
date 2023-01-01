import { Request, Response } from 'express';

export const pageNotFound404 = (req: Request, res: Response) => {
  res.status(404);
  res.render('pageNotFound');
};

export const error = (req: Request, res: Response) => {
  res.status(500);
  res.render('error');
};
