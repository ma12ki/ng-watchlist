import { Injectable } from '@angular/core';
import { Action } from 'redux';

const ACTION_PREFIX = 'UPCOMING:';

@Injectable()
export class UpcomingActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCEEDED = `${ACTION_PREFIX}LOAD_SUCCEEDED`;
  static LOAD_FAILED = `${ACTION_PREFIX}LOAD_FAILED`;

  loadStart() {
    return {
      type: UpcomingActions.LOAD_START
    };
  }

  loadSucceeded(payload) {
    return {
      type: UpcomingActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: UpcomingActions.LOAD_FAILED,
      error,
    };
  }
}
