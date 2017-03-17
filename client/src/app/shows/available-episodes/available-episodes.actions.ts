import { Injectable } from '@angular/core';
import { Action } from 'redux';

const ACTION_PREFIX = 'AVAILABLE_EPISODES:';

@Injectable()
export class AvailableEpisodesActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCEEDED = `${ACTION_PREFIX}LOAD_SUCCEEDED`;
  static LOAD_FAILED = `${ACTION_PREFIX}LOAD_FAILED`;

  loadStart() {
    return {
      type: AvailableEpisodesActions.LOAD_START
    };
  }

  loadSucceeded(payload) {
    return {
      type: AvailableEpisodesActions.LOAD_SUCCEEDED,
      payload,
    };
  }

  loadFailed(error) {
    return {
      type: AvailableEpisodesActions.LOAD_FAILED,
      error,
    };
  }
}
