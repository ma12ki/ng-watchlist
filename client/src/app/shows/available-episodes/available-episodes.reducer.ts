import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { AvailableEpisodesActions } from './available-episodes.actions';
import { IPayloadErrorAction } from '../utils/payload-action';

interface IAvailableEpisodesState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableAvailableEpisodesState extends ImmutableObject<IAvailableEpisodesState> {};

const defaultState: IImmutableAvailableEpisodesState = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class AvailableEpisodesReducer {
  reducer: (state: IImmutableAvailableEpisodesState, action: IPayloadErrorAction) => IImmutableAvailableEpisodesState;

  constructor() {
    this.reducer = availableEpisodesReducer;
  }
}

export function availableEpisodesReducer(state = defaultState, action: IPayloadErrorAction): IImmutableAvailableEpisodesState {
  switch (action.type) {
    case AvailableEpisodesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      });
    case AvailableEpisodesActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      });
    case AvailableEpisodesActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
