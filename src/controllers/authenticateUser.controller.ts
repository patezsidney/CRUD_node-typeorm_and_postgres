import { Request, Response } from 'express';
import { UserRepository } from '../repositories';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtConfigs } from '../configs';

const authenticateUser = async (req: Request, res: Response) => {
  const { email, password } = req.validated;

  const user = await new UserRepository().retrieveUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({ message: 'Wrong email/password' });
  }

  const { secretKey, expiresIn } = jwtConfigs;

  const token = jwt.sign({ email, uuid: user.uuid }, secretKey, {
    expiresIn,
  });

  return res.status(200).json({ token });
};

export default authenticateUser;
