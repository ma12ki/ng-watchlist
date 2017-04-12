import { UserRole } from './role.enum';

export interface IBaseUser {
  login: string;
  roles: UserRole[];
};

export interface IUser extends IBaseUser {
  _id: string;
  exp: number; // unix timestamp (s) as per the JWT spec
};

export interface IUserCredentials {
  login: string;
  password: string;
};
