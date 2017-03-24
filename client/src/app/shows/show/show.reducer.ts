import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';

import { ShowActions } from './show.actions';
import { FlexibleImmutableObject } from 'app/shared/shared.typings';

export interface IShowState {
  isSaving: Boolean;
  error: Object;
}

export const defaultState: FlexibleImmutableObject<IShowState> = immutable.from({
  isSaving: false,
  error: null
});

@Injectable()
export class ShowReducer {
  reducer: (state: FlexibleImmutableObject<IShowState>, action: FSA<any, any>) => FlexibleImmutableObject<IShowState>;

  constructor() {
    this.reducer = showReducer;
  }
}

export function showReducer(state = defaultState, action: FSA<any, any>): FlexibleImmutableObject<IShowState> {
  switch (action.type) {
    case ShowActions.SAVE_START:
      return state.merge({
        isSaving: true,
        error: null,
      }) as FlexibleImmutableObject<IShowState>;
    case ShowActions.SAVE_SUCCEEDED:
      return state.merge({
        error: null,
        isSaving: false,
      }) as FlexibleImmutableObject<IShowState>;
    case ShowActions.SAVE_FAILED:
      return state.merge({
        error: action.error,
        isSaving: false,
      }) as FlexibleImmutableObject<IShowState>;
  }

  return state;
}
