import { User } from '../entities/User';

const serializeUser = (user: User) => {
  const { uuid, name, email, isAdm, createdOn, updatedOn } = user;
  const response = {
    uuid,
    name,
    email,
    isAdm,
    createdOn,
    updatedOn,
  };

  return response;
};

export default serializeUser;
