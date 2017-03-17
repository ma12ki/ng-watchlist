import { Injectable } from '@angular/core';

const ACTION_PREFIX = 'SHOW:';

@Injectable()
export class ShowActions {
  static SAVE_START = `${ACTION_PREFIX}SAVE_START`;
  static SAVE_SUCCEEDED = `${ACTION_PREFIX}SAVE_SUCCEEDED`;
  static SAVE_FAILED = `${ACTION_PREFIX}SAVE_FAILED`;

  saveStart(show) {
    return {
      type: ShowActions.SAVE_START,
      payload: show,
    };
  }

  saveSucceeded(show) {
    return {
      type: ShowActions.SAVE_SUCCEEDED,
      payload: show,
    };
  }

  saveFailed(error) {
    return {
      type: ShowActions.SAVE_FAILED,
      error,
    };
  }
}
