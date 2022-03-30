import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../utils/error';

const verifyAdmPermission = (req: Request, _: Response, next: NextFunction) => {
  try {
    if (!req.user.isAdm) {
      throw new ErrorHandler(401, 'Unauthorized');
    }
    next();
  } catch (e) {
    next(e);
  }
};

export default verifyAdmPermission;
