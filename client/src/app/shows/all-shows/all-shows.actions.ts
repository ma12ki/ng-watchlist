import { Injectable } from '@angular/core';

const ACTION_PREFIX = 'ALL_SHOWS:';

@Injectable()
export class AllShowsActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCEEDED = `${ACTION_PREFIX}LOAD_SUCCEEDED`;
  static LOAD_FAILED = `${ACTION_PREFIX}LOAD_FAILED`;

  static SAVE_START = `${ACTION_PREFIX}SAVE_START`;
  static SAVE_SUCCEEDED = `${ACTION_PREFIX}SAVE_SUCCEEDED`;
  static SAVE_FAILED = `${ACTION_PREFIX}SAVE_FAILED`;

  loadStart() {
    return {
      type: AllShowsActions.LOAD_START,
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

  saveStart(show) {
    return {
      type: AllShowsActions.SAVE_START,
      payload: show,
    };
  }

  saveSucceeded() {
    return {
      type: AllShowsActions.SAVE_SUCCEEDED,
    };
  }

  saveFailed(error) {
    return {
      type: AllShowsActions.SAVE_FAILED,
      error,
    };
  }
}
