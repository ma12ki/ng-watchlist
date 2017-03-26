import { Injectable } from '@angular/core';

const ACTION_PREFIX = 'SHOW_ACTIONS:';

export interface IShowAction {
  showId: string;
  episodeId?: string;
};

export interface IPostponeEpisodesAction extends IShowAction {
  postponeUntil: Date;
};

@Injectable()
export class ShowActions {
  static ADD_START = `${ACTION_PREFIX}ADD_START`;
  static ADD_SUCCEEDED = `${ACTION_PREFIX}ADD_SUCCEEDED`;
  static ADD_FAILED = `${ACTION_PREFIX}ADD_FAILED`;

  static REMOVE_START = `${ACTION_PREFIX}REMOVE_START`;
  static REMOVE_SUCCEEDED = `${ACTION_PREFIX}REMOVE_SUCCEEDED`;
  static REMOVE_FAILED = `${ACTION_PREFIX}REMOVE_FAILED`;

  static TRACK_START = `${ACTION_PREFIX}TRACK_START`;
  static TRACK_SUCCEEDED = `${ACTION_PREFIX}TRACK_SUCCEEDED`;
  static TRACK_FAILED = `${ACTION_PREFIX}TRACK_FAILED`;

  static UNTRACK_START = `${ACTION_PREFIX}UNTRACK_START`;
  static UNTRACK_SUCCEEDED = `${ACTION_PREFIX}UNTRACK_SUCCEEDED`;
  static UNTRACK_FAILED = `${ACTION_PREFIX}UNTRACK_FAILED`;

  static MARK_WATCHED_START = `${ACTION_PREFIX}MARK_WATCHED_START`;
  static MARK_WATCHED_SUCCEEDED = `${ACTION_PREFIX}MARK_WATCHED_SUCCEEDED`;
  static MARK_WATCHED_FAILED = `${ACTION_PREFIX}MARK_WATCHED_FAILED`;

  static UNMARK_WATCHED_START = `${ACTION_PREFIX}UNMARK_WATCHED_START`;
  static UNMARK_WATCHED_SUCCEEDED = `${ACTION_PREFIX}UNMARK_WATCHED_SUCCEEDED`;
  static UNMARK_WATCHED_FAILED = `${ACTION_PREFIX}UNMARK_WATCHED_FAILED`;

  static POSTPONE_EPISODES_START = `${ACTION_PREFIX}POSTPONE_EPISODES_START`;
  static POSTPONE_EPISODES_SUCCEEDED = `${ACTION_PREFIX}POSTPONE_EPISODES_SUCCEEDED`;
  static POSTPONE_EPISODES_FAILED = `${ACTION_PREFIX}POSTPONE_EPISODES_FAILED`;

  addStart(payload: IShowAction) {
    return {
      type: ShowActions.ADD_START,
      payload,
    };
  }

  addSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.ADD_SUCCEEDED,
      payload,
    };
  }

  addFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.ADD_FAILED,
      payload,
      error,
    };
  }

  removeStart(payload: IShowAction) {
    return {
      type: ShowActions.REMOVE_START,
      payload,
    };
  }

  removeSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.REMOVE_SUCCEEDED,
      payload,
    };
  }

  removeFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.REMOVE_FAILED,
      payload,
      error,
    };
  }

  trackStart(payload: IShowAction) {
    return {
      type: ShowActions.TRACK_START,
      payload,
    };
  }

  trackSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.TRACK_SUCCEEDED,
      payload,
    };
  }

  trackFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.TRACK_FAILED,
      payload,
      error,
    };
  }

  untrackStart(payload: IShowAction) {
    return {
      type: ShowActions.UNTRACK_START,
      payload,
    };
  }

  untrackSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.UNTRACK_SUCCEEDED,
      payload,
    };
  }

  untrackFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.UNTRACK_FAILED,
      payload,
      error,
    };
  }

  markWatchedStart(payload: IShowAction) {
    return {
      type: ShowActions.MARK_WATCHED_START,
      payload,
    };
  }

  markWatchedSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.MARK_WATCHED_SUCCEEDED,
      payload,
    };
  }

  markWatchedFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.MARK_WATCHED_FAILED,
      payload,
      error,
    };
  }

  unmarkWatchedStart(payload: IShowAction) {
    return {
      type: ShowActions.UNMARK_WATCHED_START,
      payload,
    };
  }

  unmarkWatchedSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.UNMARK_WATCHED_SUCCEEDED,
      payload,
    };
  }

  unmarkWatchedFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.UNMARK_WATCHED_FAILED,
      payload,
      error,
    };
  }

  postponeEpisodesStart(payload: IPostponeEpisodesAction) {
    return {
      type: ShowActions.POSTPONE_EPISODES_START,
      payload,
    };
  }

  postponeEpisodesSucceeded(payload: IShowAction) {
    return {
      type: ShowActions.POSTPONE_EPISODES_SUCCEEDED,
      payload,
    };
  }

  postponeEpisodesFailed(payload: IShowAction, error: any) {
    return {
      type: ShowActions.POSTPONE_EPISODES_FAILED,
      payload,
      error,
    };
  }
}
