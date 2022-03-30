import { Router } from 'express';
import { loginUser, createUser, getAllUsers } from '../controllers';
import validateShape from '../middlewares/validateShape.middleware';
import { createUserShape } from '../models';
import loginUserShape from '../models/loginUser.shape';

const usersRoute = Router();

usersRoute.post('', validateShape(createUserShape), createUser);

usersRoute.get('', getAllUsers);

usersRoute.post('/login', validateShape(loginUserShape), loginUser);

export default usersRoute;
