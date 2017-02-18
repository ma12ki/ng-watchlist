import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { FSA } from 'flux-standard-action';

import { ShowTypesActions } from './show-types.actions';
import { IImmutableShowTypes, IShowType } from './show-types.interfaces';

export const showTypesDefaultState: IImmutableShowTypes = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class ShowTypesReducer {
  reducer: (state: IImmutableShowTypes, action: FSA<any, any>) => IImmutableShowTypes;

  constructor() {
    this.reducer = showTypesReducer;
  }
}

export function showTypesReducer(state = showTypesDefaultState, action: FSA<any, any>): IImmutableShowTypes {
  switch (action.type) {
    case ShowTypesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: false
      });
    case ShowTypesActions.LOAD_SUCCESS:
      return state.merge({
        items: action.payload,
        error: false,
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
