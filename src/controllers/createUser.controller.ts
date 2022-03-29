import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await new UserRepository().createUser(req.validated);

    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).json({ message: 'E-mail already registered' });
  }
};

export default createUser;
