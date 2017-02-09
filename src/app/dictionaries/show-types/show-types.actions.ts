import { Injectable } from '@angular/core';
import { Action } from 'redux';

import { IErrorAction, IPayloadAction } from '../../utils/payload-action';

const ACTION_PREFIX = 'DICT:SHOW_TYPES:';

@Injectable()
export class ShowTypesActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCESS = `${ACTION_PREFIX}LOAD_SUCCESS`;
  static LOAD_ERROR = `${ACTION_PREFIX}LOAD_ERROR`;

  load(): Action {
    return {
      type: ShowTypesActions.LOAD_START
    };
  }

  loadSuccess(payload): IPayloadAction {
    return {
      type: ShowTypesActions.LOAD_SUCCESS,
      payload,
    };
  }

  loadError(error): IErrorAction {
    return {
      type: ShowTypesActions.LOAD_ERROR,
      error,
    };
  }
}
