import { Request, Response } from 'express';
import { serializeUser } from '../services';

const getUserProfile = async (req: Request, res: Response) => {
  const response = serializeUser(req.user);
  return res.status(200).json(response);
};

export default getUserProfile;
