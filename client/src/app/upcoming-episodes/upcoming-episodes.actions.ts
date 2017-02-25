import { Injectable } from '@angular/core';
import { Action } from 'redux';

const ACTION_PREFIX = 'UPCOMING_EPISODES:';

@Injectable()
export class UpcomingEpisodesActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCEEDED = `${ACTION_PREFIX}LOAD_SUCCEEDED`;
  static LOAD_FAILED = `${ACTION_PREFIX}LOAD_FAILED`;

  loadStart() {
    return {
      type: UpcomingEpisodesActions.LOAD_START
    };
  }

  loadSucceeded(payload) {
    return {
      type: UpcomingEpisodesActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: UpcomingEpisodesActions.LOAD_FAILED,
      error,
    };
  }
}
