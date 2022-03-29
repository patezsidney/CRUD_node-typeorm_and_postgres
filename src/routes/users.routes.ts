import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers';
import validateShape from '../middlewares/validateShape.middleware';
import { createUserShape } from '../models';

const usersRoute = Router();

usersRoute.post('', validateShape(createUserShape), createUser);

usersRoute.get('', getAllUsers);

export default usersRoute;
