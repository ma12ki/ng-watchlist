import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

import { FlexibleImmutableObject } from '../../shared/shared.typings';

import { IShowAction, ShowActions } from './show-actions.actions';

interface IEpisodeInfo {
    [episodeId: string]: {
      isFetching: boolean,
      error: any,
    };
};

interface IShowInfo {
    isFetching: boolean;
    error: any;
    episodes: IEpisodeInfo;
};

export interface IShowActionsState {
  [showId: string]: IShowInfo;
};

export const defaultState: FlexibleImmutableObject<IShowActionsState> = immutable.from({});

@Injectable()
export class ShowActionsReducer {
  reducer: (state: FlexibleImmutableObject<IShowActionsState>, action: FSA<any, any>) => FlexibleImmutableObject<IShowActionsState>;

  constructor() {
    this.reducer = showActionsReducer;
  }
}

export function showActionsReducer(state = defaultState, action: FSA<IShowAction, any>): FlexibleImmutableObject<IShowActionsState> {
  switch (action.type) {
    case ShowActions.ADD_START:
    case ShowActions.REMOVE_START:
    case ShowActions.TRACK_START:
    case ShowActions.UNTRACK_START: {
      return state.set(action.payload.showId, {
        isFetching: true,
        error: null,
        episodes: {},
      }) as FlexibleImmutableObject<IShowActionsState>;
    }
    case ShowActions.ADD_SUCCEEDED:
    case ShowActions.REMOVE_SUCCEEDED:
    case ShowActions.TRACK_SUCCEEDED:
    case ShowActions.UNTRACK_SUCCEEDED: {
      return state.set(action.payload.showId, {
        isFetching: false,
        error: null,
        episodes: {},
      }) as FlexibleImmutableObject<IShowActionsState>;
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
      }) as FlexibleImmutableObject<IShowActionsState>;
    }

    case ShowActions.MARK_WATCHED_START:
    case ShowActions.UNMARK_WATCHED_START:
    {
      const show = getShow(state, action.payload.showId);
      const episodes = (show.episodes as FlexibleImmutableObject<IEpisodeInfo>).set(action.payload.episodeId, {
        isFetching: true,
        error: null,
      });
      return state.set(
        action.payload.showId,
        show.set('episodes', episodes),
      ) as FlexibleImmutableObject<IShowActionsState>;
    }

    case ShowActions.MARK_WATCHED_SUCCEEDED:
    case ShowActions.UNMARK_WATCHED_SUCCEEDED:
    {
      const show = getShow(state, action.payload.showId);
      const episodes = (show.episodes as FlexibleImmutableObject<IEpisodeInfo>).set(action.payload.episodeId, {
        isFetching: false,
        error: null,
      });
      return state.set(
        action.payload.showId,
        show.set('episodes', episodes),
      ) as FlexibleImmutableObject<IShowActionsState>;
    }

    case ShowActions.MARK_WATCHED_FAILED:
    case ShowActions.UNMARK_WATCHED_FAILED:
    {
      const show = getShow(state, action.payload.showId);
      const episodes = (show.episodes as FlexibleImmutableObject<IEpisodeInfo>).set(action.payload.episodeId, {
        isFetching: false,
        error: action.error,
      });
      return state.set(
        action.payload.showId,
        show.set('episodes', episodes),
      ) as FlexibleImmutableObject<IShowActionsState>;
    }
  }

  return state;
}

function getShow(state: FlexibleImmutableObject<IShowActionsState>, showId: string): FlexibleImmutableObject<IShowInfo> {
  return (state[showId] || immutable.from({ episodes: {} })) as FlexibleImmutableObject<IShowInfo>;
}
