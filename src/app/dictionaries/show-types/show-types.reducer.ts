import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { ShowTypesActions } from './show-types.actions';
import { IShowType } from './show-types.interfaces';
import { IPayloadErrorAction } from '../../utils/payload-action';

interface IShowTypesState {
  items: Array<IShowType>;
  isFetching: Boolean;
  error: Object;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableShowTypesState extends ImmutableObject<IShowTypesState> {};

const defaultState: IImmutableShowTypesState = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class ShowTypesReducer {
  reducer: (state: IImmutableShowTypesState, action: IPayloadErrorAction) => IImmutableShowTypesState;

  constructor() {
    this.reducer = showTypesReducer;
  }
}

export function showTypesReducer(state = defaultState, action: IPayloadErrorAction): IImmutableShowTypesState {
  switch (action.type) {
    case ShowTypesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      });
    case ShowTypesActions.LOAD_SUCCESS:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      });
    case ShowTypesActions.LOAD_ERROR:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
