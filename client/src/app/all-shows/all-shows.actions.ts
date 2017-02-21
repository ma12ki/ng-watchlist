import { Injectable } from '@angular/core';
import { Action } from 'redux';

const ACTION_PREFIX = 'ALL_SHOWS:';

@Injectable()
export class AllShowsActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCEEDED = `${ACTION_PREFIX}LOAD_SUCCEEDED`;
  static LOAD_FAILED = `${ACTION_PREFIX}LOAD_FAILED`;

  loadStart() {
    return {
      type: AllShowsActions.LOAD_START
    };
  }

  loadSucceeded(payload) {
    return {
      type: AllShowsActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: AllShowsActions.LOAD_FAILED,
      error,
    };
  }
}
