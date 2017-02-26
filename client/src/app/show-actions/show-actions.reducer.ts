import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { ShowActions } from './show-actions.actions';
import { IPayloadErrorAction } from '../utils/payload-action';

interface IEpisodeInfo {
    [episodeId: string]: {
      isFetching: boolean,
      error: any,
    };
};

export interface IShowActionsState {
  [showId: string]: IEpisodeInfo;
};

/* tslint:disable:no-empty-interface */
export interface IImmutableShowActionsState extends ImmutableObject<IShowActionsState> {};

const defaultState: IImmutableShowActionsState = immutable.from({});

@Injectable()
export class ShowActionsReducer {
  reducer: (state: IImmutableShowActionsState, action: IPayloadErrorAction) => IImmutableShowActionsState;

  constructor() {
    this.reducer = showActionsReducer;
  }
}

export function showActionsReducer(state = defaultState, action: IPayloadErrorAction): IImmutableShowActionsState {
  switch (action.type) {
    case ShowActions.ADD_START:
    case ShowActions.REMOVE_START:
    case ShowActions.TRACK_START:
    case ShowActions.UNTRACK_START: {
      return state.set(action.payload.showId, {
        isFetching: true,
        error: null,
        episodes: {},
      });
    }
    case ShowActions.ADD_SUCCEEDED:
    case ShowActions.REMOVE_SUCCEEDED:
    case ShowActions.TRACK_SUCCEEDED:
    case ShowActions.UNTRACK_SUCCEEDED: {
      return state.set(action.payload.showId, {
        isFetching: false,
        error: null,
        episodes: {},
      });
    }
    case ShowActions.ADD_FAILED:
    case ShowActions.REMOVE_FAILED:
    case ShowActions.TRACK_FAILED:
    case ShowActions.UNTRACK_FAILED:
    {
      return state.set(action.payload.showId, {
        isFetching: false,
        error: action.error,
        episodes: {},
      });
    }

    case ShowActions.MARK_WATCHED_START:
    case ShowActions.UNMARK_WATCHED_START:
    {
      let show = state[action.payload.showId] || immutable.from({ episodes: {} });
      const episodes = show.episodes.set(action.payload.episodeId, {
        isFetching: true,
        error: null,
      });
      show = show.set('episodes', episodes);
      return state.set(action.payload.showId, show);
    }

    case ShowActions.MARK_WATCHED_SUCCEEDED:
    case ShowActions.UNMARK_WATCHED_SUCCEEDED:
    {
      let show = state[action.payload.showId] || immutable.from({ episodes: {} });
      const episodes = show.episodes.set(action.payload.episodeId, {
        isFetching: false,
        error: null,
      });
      show = show.set('episodes', episodes);
      return state.set(action.payload.showId, show);
    }

    case ShowActions.MARK_WATCHED_FAILED:
    case ShowActions.UNMARK_WATCHED_FAILED:
    {
      let show = state[action.payload.showId] || immutable.from({ episodes: {} });
      const episodes = show.episodes.set(action.payload.episodeId, {
        isFetching: false,
        error: action.error,
      });
      show = show.set('episodes', episodes);
      return state.set(action.payload.showId, show);
    }
  }

  return state;
}
