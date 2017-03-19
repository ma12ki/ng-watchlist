import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

import { ShowActions } from '../show-actions/show-actions.actions';
import { AvailableEpisodesActions } from './available-episodes.actions';
import { FlexibleImmutableObject } from '../../shared/shared.typings';

export interface IAvailableEpisodesState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

export const defaultState: FlexibleImmutableObject<IAvailableEpisodesState> = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class AvailableEpisodesReducer {
  reducer: (
    state: FlexibleImmutableObject<IAvailableEpisodesState>,
    action: FSA<any, any>
  ) => FlexibleImmutableObject<IAvailableEpisodesState>;

  constructor() {
    this.reducer = availableEpisodesReducer;
  }
}

export function availableEpisodesReducer(state = defaultState, action: FSA<any, any>): FlexibleImmutableObject<IAvailableEpisodesState> {
  switch (action.type) {
    case AvailableEpisodesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null,
      }) as FlexibleImmutableObject<IAvailableEpisodesState>;
    case AvailableEpisodesActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false,
      }) as FlexibleImmutableObject<IAvailableEpisodesState>;
    case AvailableEpisodesActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false,
      }) as FlexibleImmutableObject<IAvailableEpisodesState>;
    case ShowActions.MARK_WATCHED_SUCCEEDED: {
      const items = state.items.map((item) => {
        if (item._id === action.payload.episodeId) {
          item = item.merge({
            watched: true,
          });
        }
        return item;
      });
      return state.merge({
        items,
      }) as FlexibleImmutableObject<IAvailableEpisodesState>;
    }
    case ShowActions.UNMARK_WATCHED_SUCCEEDED: {
      const items = state.items.map((item) => {
        if (item._id === action.payload.episodeId) {
          item = item.merge({
            watched: false,
          });
        }
        return item;
      });
      return state.merge({
        items,
      }) as FlexibleImmutableObject<IAvailableEpisodesState>;
    }
  }

  return state;
}
