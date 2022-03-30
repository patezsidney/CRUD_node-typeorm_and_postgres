import { Router } from 'express';
import {
  loginUser,
  createUser,
  getAllUsers,
  getUserProfile,
  updateUser,
} from '../controllers';
import { createUserShape, loginUserShape, updateUserShape } from '../models';
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

usersRoute.patch(
  '/:uuid',
  validateShape(updateUserShape),
  authenticateUser,
  getUser,
  updateUser
);

export default usersRoute;
