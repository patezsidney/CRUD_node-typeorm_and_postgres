import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import { serializeUser } from '../services';

const updateUser = async (req: Request, res: Response) => {
  const { uuid } = req.params;

  if (!req.user.isAdm && uuid !== req.user.uuid) {
    return res.status(401).json({ message: 'Missing admin permissions' });
  }

  await new UserRepository().updateUser(uuid, req.validated);

  const user = await new UserRepository().retrieveUserById(uuid);

  const response = serializeUser(user);

  return res.status(200).json(response);
};

export default updateUser;
