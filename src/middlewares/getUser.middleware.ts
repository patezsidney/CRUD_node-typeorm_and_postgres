import { NextFunction, Request, Response } from 'express';
import { UserRepository } from '../repositories';

const getUser = async (req: Request, _: Response, next: NextFunction) => {
  const user = await new UserRepository().retrieveUserById(req.uuid);

  req.user = user;
  next();
};

export default getUser;
