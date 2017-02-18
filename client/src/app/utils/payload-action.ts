import { Action } from 'redux';

export interface IPayloadErrorAction extends Action {
  payload?: any;
  error?: any;
}

export interface IPayloadAction extends Action {
  payload: any;
}

export interface IErrorAction extends Action {
  error: any;
}
