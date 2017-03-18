import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

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
  }

  return state;
}
