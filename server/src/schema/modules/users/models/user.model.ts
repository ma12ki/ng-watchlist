import { Schema, model, Document } from 'mongoose';

import { IBaseUserWithPassword } from '../interfaces/user.interface';

interface IUserModel extends IBaseUserWithPassword, Document {};

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  passwordHash: {
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
UserSchema.index({ login: 1, type: 1 });

const UserModel = model<IUserModel>('User', UserSchema);

export {
  IUserModel,
  UserSchema,
  UserModel,
};
