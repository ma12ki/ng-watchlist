import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { ShowActions } from './show.actions';
import { IPayloadErrorAction } from '../utils/payload-action';

interface IShowState {
  isSaving: Boolean;
  error: Object;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableShowState extends ImmutableObject<IShowState> {};

const defaultState: IImmutableShowState = immutable.from({
  isSaving: false,
  error: null
});

@Injectable()
export class ShowReducer {
  reducer: (state: IImmutableShowState, action: IPayloadErrorAction) => IImmutableShowState;

  constructor() {
    this.reducer = showReducer;
  }
}

export function showReducer(state = defaultState, action: IPayloadErrorAction): IImmutableShowState {
  switch (action.type) {
    case ShowActions.SAVE_START:
      return state.merge({
        isSaving: true,
        error: null,
      });
    case ShowActions.SAVE_SUCCEEDED:
      return state.merge({
        error: null,
        isSaving: false,
      });
    case ShowActions.SAVE_FAILED:
      return state.merge({
        error: action.error,
        isSaving: false,
      });
  }

  return state;
}
