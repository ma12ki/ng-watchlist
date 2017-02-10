import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { FSA } from 'flux-standard-action';

import { ShowFrequenciesActions } from './show-frequencies.actions';
import { IImmutableFrequenciesTypes, IShowFrequency } from './show-frequencies.interfaces';

export const showFrequenciesDefaultState: IImmutableFrequenciesTypes = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

@Injectable()
export class ShowFrequenciesReducer {
  reducer: (state: IImmutableFrequenciesTypes, action: FSA<any, any>) => IImmutableFrequenciesTypes;

  constructor() {
    this.reducer = showFrequenciesReducer;
  }
}

export function showFrequenciesReducer(state = showFrequenciesDefaultState, action: FSA<any, any>): IImmutableFrequenciesTypes {
  switch (action.type) {
    case ShowFrequenciesActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: false
      });
    case ShowFrequenciesActions.LOAD_SUCCESS:
      return state.merge({
        items: action.payload,
        error: false,
        isFetching: false
      });
    case ShowFrequenciesActions.LOAD_ERROR:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
