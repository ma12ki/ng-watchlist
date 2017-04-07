import { Injectable } from '@angular/core';

const ACTION_PREFIX = 'UPCOMING_EPISODES:';

@Injectable()
export class UpcomingEpisodesActions {
  static LOAD_START = `${ACTION_PREFIX}LOAD_START`;
  static LOAD_SUCCEEDED = `${ACTION_PREFIX}LOAD_SUCCEEDED`;
  static LOAD_FAILED = `${ACTION_PREFIX}LOAD_FAILED`;
  static LOAD_MORE_START = `${ACTION_PREFIX}LOAD_MORE_START`;
  static LOAD_MORE_SUCCEEDED = `${ACTION_PREFIX}LOAD_MORE_SUCCEEDED`;
  static LOAD_MORE_FAILED = `${ACTION_PREFIX}LOAD_MORE_FAILED`;

  loadStart({maxDate = ''}) {
    return {
      type: UpcomingEpisodesActions.LOAD_START,
      payload: {
        maxDate,
      },
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

  loadMoreStart({cursor = ''}) {
    return {
      type: UpcomingEpisodesActions.LOAD_MORE_START,
      payload: {
        cursor,
      },
    };
  }

  loadMoreSucceeded(payload) {
    return {
      type: UpcomingEpisodesActions.LOAD_MORE_SUCCEEDED,
      payload,
    };
  }

  loadMoreFailed(error) {
    return {
      type: UpcomingEpisodesActions.LOAD_MORE_FAILED,
      error,
    };
  }
}
