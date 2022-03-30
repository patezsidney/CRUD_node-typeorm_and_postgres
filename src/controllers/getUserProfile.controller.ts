import { Request, Response } from 'express';
import { UserRepository } from '../repositories';

const getUserProfile = async (req: Request, res: Response) => {
  return res.status(200).json(req.user);
};

export default getUserProfile;
