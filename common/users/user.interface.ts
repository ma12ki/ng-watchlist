import { UserRole } from './role.enum';

export interface IBaseUser {
  login: string;
  roles: UserRole[];
};

export interface IUser extends IBaseUser {
  _id: string;
  expirationDate: string;
};

export interface IUserCredentials {
  login: string;
  password: string;
};
