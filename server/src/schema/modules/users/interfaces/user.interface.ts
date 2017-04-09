import { IBaseUser } from '../../../../../../common/users';

export * from '../../../../../../common/users';

export interface IBaseUserWithPassword extends IBaseUser {
  passwordHash: string;
};
