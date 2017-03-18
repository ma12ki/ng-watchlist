import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

import { UpcomingEpisodesActions } from './upcoming-episodes.actions';
import { FlexibleImmutableObject } from '../../shared/shared.typings';

export interface IUpcomingEpisodesState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

export const defaultState: FlexibleImmutableObject<IUpcomingEpisodesState> = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class UpcomingEpisodesReducer {
  reducer: (
    state: FlexibleImmutableObject<IUpcomingEpisodesState>,
    action: FSA<any, any>
  ) => FlexibleImmutableObject<IUpcomingEpisodesState>;

  constructor() {
    this.reducer = upcomingEpisodesReducer;
  }
}

export function upcomingEpisodesReducer(state = defaultState, action: FSA<any, any>): FlexibleImmutableObject<IUpcomingEpisodesState> {
  switch (action.type) {
    case UpcomingEpisodesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      }) as FlexibleImmutableObject<IUpcomingEpisodesState>;
    case UpcomingEpisodesActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      }) as FlexibleImmutableObject<IUpcomingEpisodesState>;
    case UpcomingEpisodesActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      }) as FlexibleImmutableObject<IUpcomingEpisodesState>;
  }

  return state;
}
