import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const getUserProfile = async (req: Request, res: Response) => {
  const user = await new UserRepository().retrieveUserById(req.uuid);

  return res.status(200).json(user);
};

export default getUserProfile;
