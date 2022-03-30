import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const getAllUsers = async (_: Request, res: Response) => {
  const users = await new UserRepository().retrieveUsers();

  return res.status(200).json(users);
};

export default getAllUsers;
