import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { UpcomingActions } from './upcoming.actions';
import { IPayloadAction } from '../utils/payload-action';

interface IUpcomingState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableUpcomingState extends ImmutableObject<IUpcomingState> {};

const defaultState: IImmutableUpcomingState = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class UpcomingReducer {
  reducer: (state: IImmutableUpcomingState, action: IPayloadAction) => IImmutableUpcomingState;

  constructor() {
    this.reducer = upcomingReducer;
  }
}

export function upcomingReducer(state = defaultState, action: IPayloadAction): IImmutableUpcomingState {
  switch (action.type) {
    case UpcomingActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      });
    case UpcomingActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      });
    case UpcomingActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
