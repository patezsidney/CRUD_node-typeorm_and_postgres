import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const deleteUser = async (req: Request, res: Response) => {
  const { uuid } = req.params;

  if (!req.user.isAdm && uuid !== req.user.uuid) {
    return res.status(401).json({ message: 'Missing admin permissions' });
  }

  const result = await new UserRepository().deleteUser(uuid);

  return res.status(200).json({ message: 'User deleted with success' });
};

export default deleteUser;
