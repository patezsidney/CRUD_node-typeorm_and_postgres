import { UpdateResult } from 'typeorm';

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
  createUser: (user: UserInterface) => Promise<UserInterface>;
  retrieveUsers: () => Promise<UserInterface[]>;
  retrieveUserProfile: (uuid: string) => Promise<UserInterface>;
  updateUser: (
    uuid: string,
    data: UserUpdateDataInterface
  ) => Promise<UpdateResult>;
}

export { UserInterface, UserRepo, UserUpdateDataInterface };
