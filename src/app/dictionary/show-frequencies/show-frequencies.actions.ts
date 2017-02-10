import { Injectable } from '@angular/core';
import { Action } from 'redux';

import { IErrorAction, IPayloadAction } from '../../utils/payload-action';

const ACTION_PREFIX = 'DICT:SHOW_FREQUENCIES:';

@Injectable()
export class ShowFrequenciesActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCESS = `${ACTION_PREFIX}LOAD_SUCCESS`;
  static LOAD_ERROR = `${ACTION_PREFIX}LOAD_ERROR`;

  load(): Action {
    return {
      type: ShowFrequenciesActions.LOAD_START
    };
  }

  loadSuccess(payload): IPayloadAction {
    return {
      type: ShowFrequenciesActions.LOAD_SUCCESS,
      payload,
    };
  }

  loadError(error): IErrorAction {
    return {
      type: ShowFrequenciesActions.LOAD_ERROR,
      error,
    };
  }
}
