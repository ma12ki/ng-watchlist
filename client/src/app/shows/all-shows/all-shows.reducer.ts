import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { AllShowsActions } from './all-shows.actions';
import { IPayloadErrorAction } from '../utils/payload-action';

interface IAllShowsState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableAllShowsState extends ImmutableObject<IAllShowsState> {};

const defaultState: IImmutableAllShowsState = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class AllShowsReducer {
  reducer: (state: IImmutableAllShowsState, action: IPayloadErrorAction) => IImmutableAllShowsState;

  constructor() {
    this.reducer = upcomingReducer;
  }
}

export function upcomingReducer(state = defaultState, action: IPayloadErrorAction): IImmutableAllShowsState {
  switch (action.type) {
    case AllShowsActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      });
    case AllShowsActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      });
    case AllShowsActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
