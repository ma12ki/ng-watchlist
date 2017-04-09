import { UserRole } from './role.enum';
import { IUser } from './user.interface';

const getRoles = (user: IUser) => {
  return user.roles;
};

const hasRole = (user: IUser, role: UserRole) => {
  return (<any>getRoles(user)).includes(role);
};

const hasAdminRole = (user: IUser) => {
  return hasRole(user, UserRole.Admin);
};

const hasUserRole = (user: IUser) => {
  return hasRole(user, UserRole.User);
};

const isExpired = (user: IUser) => {
  return new Date(user.expirationDate) < new Date();
};

const isValid = (user: IUser) => {
  return user && !isExpired(user);
};

export const permissionService = {
  hasRole,
  hasAdminRole,
  hasUserRole,
  isExpired,
  isValid,
};
