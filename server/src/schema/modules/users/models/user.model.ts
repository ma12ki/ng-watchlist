import { Schema, model, Document } from 'mongoose';

import { IBaseUser } from '../interfaces/user.interface';

interface IUserModel extends IBaseUser, Document {};

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    required: true,
    default: [],
  },
});

UserSchema.index({ _id: 1, type: 1 });

const UserModel = model<IUserModel>('User', UserSchema);

export {
  IUserModel,
  UserSchema,
  UserModel,
};
