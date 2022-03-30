import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { serializeUser } from '../services';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await new UserRepository().createUser(req.validated);

    const response = serializeUser(user);

    return res.status(201).json(response);
  } catch (e) {
    return res.status(400).json({ message: 'E-mail already registered' });
  }
};

export default createUser;
