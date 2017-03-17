import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

import {
  IImmutableShowActionsState,
  defaultState as showActionsDefaultState,
} from './show-actions/show-actions.reducer';
import {
  IImmutableShowDictionaryState,
  defaultState as showDictionaryDefaultState,
} from './dictionary/dictionary.reducer';

interface IShowsState {
  dictionary: IImmutableShowDictionaryState;
  showActions: IImmutableShowActionsState;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableShowsState extends ImmutableObject<IShowsState> {};

export const defaultState: IImmutableShowsState = immutable.from({
  dictionary: showDictionaryDefaultState,
  showActions: showActionsDefaultState,
});

@Injectable()
export class ShowsReducer {
  reducer: (state: IImmutableShowsState, action: FSA<any, any>) => IImmutableShowsState;

  constructor() {
    this.reducer = showsReducer;
  }
}

export function showsReducer(state = defaultState, action: FSA<any, any>): IImmutableShowsState {
  return state;
}
