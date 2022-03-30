import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { serializeUser } from '../services';

const getAllUsers = async (_: Request, res: Response) => {
  const users = await new UserRepository().retrieveUsers();

  const response = users.map((user) => serializeUser(user));

  return res.status(200).json(response);
};

export default getAllUsers;
