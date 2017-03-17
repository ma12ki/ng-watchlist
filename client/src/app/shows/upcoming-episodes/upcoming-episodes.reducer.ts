import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { UpcomingEpisodesActions } from './upcoming-episodes.actions';
import { IPayloadErrorAction } from '../utils/payload-action';

interface IUpcomingEpisodesState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableUpcomingEpisodesState extends ImmutableObject<IUpcomingEpisodesState> {};

const defaultState: IImmutableUpcomingEpisodesState = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class UpcomingEpisodesReducer {
  reducer: (state: IImmutableUpcomingEpisodesState, action: IPayloadErrorAction) => IImmutableUpcomingEpisodesState;

  constructor() {
    this.reducer = upcomingEpisodesReducer;
  }
}

export function upcomingEpisodesReducer(state = defaultState, action: IPayloadErrorAction): IImmutableUpcomingEpisodesState {
  switch (action.type) {
    case UpcomingEpisodesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      });
    case UpcomingEpisodesActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      });
    case UpcomingEpisodesActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
