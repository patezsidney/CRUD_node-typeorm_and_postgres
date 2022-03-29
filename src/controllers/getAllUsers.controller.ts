import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const getAllUsers = (_: Request, res: Response) => {
  const users = new UserRepository().retrieveUsers();

  res.status(200).json(users);
};

export default getAllUsers;
