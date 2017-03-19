import { ShowActions } from '../show-actions/show-actions.actions';
import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

import { AllShowsActions } from './all-shows.actions';
import { FlexibleImmutableObject } from '../../shared/shared.typings';

export interface IAllShowsState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

export const defaultState: FlexibleImmutableObject<IAllShowsState> = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class AllShowsReducer {
  reducer: (state: FlexibleImmutableObject<IAllShowsState>, action: FSA<any, any>) => FlexibleImmutableObject<IAllShowsState>;

  constructor() {
    this.reducer = allShowsReducer;
  }
}

export function allShowsReducer(state = defaultState, action: FSA<any, any>): FlexibleImmutableObject<IAllShowsState> {
  switch (action.type) {
    case AllShowsActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      }) as FlexibleImmutableObject<IAllShowsState>;
    case AllShowsActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      }) as FlexibleImmutableObject<IAllShowsState>;
    case AllShowsActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      }) as FlexibleImmutableObject<IAllShowsState>;
    case ShowActions.ADD_SUCCEEDED: {
      const items = state.items.map((item) => {
        if (item._id === action.payload.showId) {
          item = item.merge({
            listed: true,
          });
        }
        return item;
      });
      return state.merge({
        items,
      }) as FlexibleImmutableObject<IAllShowsState>;
    }
    case ShowActions.REMOVE_SUCCEEDED: {
      const items = state.items.map((item) => {
        if (item._id === action.payload.showId) {
          item = item.merge({
            listed: false,
          });
        }
        return item;
      });
      return state.merge({
        items,
      }) as FlexibleImmutableObject<IAllShowsState>;
    }
    case ShowActions.TRACK_SUCCEEDED: {
      const items = state.items.map((item) => {
        if (item._id === action.payload.showId) {
          item = item.merge({
            listed: true,
            tracked: true,
          });
        }
        return item;
      });
      return state.merge({
        items,
      }) as FlexibleImmutableObject<IAllShowsState>;
    }
    case ShowActions.UNTRACK_SUCCEEDED: {
      const items = state.items.map((item) => {
        if (item._id === action.payload.showId) {
          item = item.merge({
            tracked: false,
          });
        }
        return item;
      });
      return state.merge({
        items,
      }) as FlexibleImmutableObject<IAllShowsState>;
    }
  }

  return state;
}
