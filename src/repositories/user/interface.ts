import { UpdateResult } from 'typeorm';
import { User } from '../../entities/User';

interface UserInterface {
  uuid: string;
  name: string;
  email: string;
  isAdm: boolean;
  password: string;
  createdOn: Date;
  updatedOn: Date;
}

interface UserUpdateDataInterface {
  name?: string;
  email?: string;
  password?: string;
  updatedOn?: Date;
}

interface UserRepo {
  createUser: (user: UserInterface) => Promise<User>;
  retrieveUsers: () => Promise<User[]>;
  retrieveUserProfile: (uuid: string) => Promise<User | undefined>;
  updateUser: (
    uuid: string,
    data: UserUpdateDataInterface
  ) => Promise<UpdateResult>;
}

export { UserInterface, UserRepo, UserUpdateDataInterface };
