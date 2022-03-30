import { Router } from 'express';
import {
  loginUser,
  createUser,
  getAllUsers,
  getUserProfile,
} from '../controllers';
import { createUserShape } from '../models';
import loginUserShape from '../models/loginUser.shape';
import {
  validateShape,
  authenticateUser,
  getUser,
  verifyAdmPermission,
} from '../middlewares';

const usersRoute = Router();

usersRoute.post('', validateShape(createUserShape), createUser);

usersRoute.get('', authenticateUser, getUser, verifyAdmPermission, getAllUsers);

usersRoute.post('/login', validateShape(loginUserShape), loginUser);

usersRoute.get('/profile', authenticateUser, getUser, getUserProfile);

export default usersRoute;
