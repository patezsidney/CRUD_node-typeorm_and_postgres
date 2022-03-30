import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const updateUser = async (req: Request, res: Response) => {
  const { uuid } = req.params;

  if (!req.user.isAdm && uuid !== req.user.uuid) {
    return res.status(401).json({ message: 'Missing admin permissions' });
  }

  await new UserRepository().updateUser(uuid, req.validated);

  const user = await new UserRepository().retrieveUserById(uuid);

  return res.status(200).json(user);
};

export default updateUser;
