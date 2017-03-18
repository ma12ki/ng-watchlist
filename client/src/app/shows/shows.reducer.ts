import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';
import { combineReducers } from 'redux';

import { FlexibleImmutableObject } from '../shared/shared.typings';

import {
  IShowDictionaryState,
  ShowDictionaryReducer,
  defaultState as showDictionaryDefaultState,
} from './dictionary/dictionary.reducer';
import {
  IShowActionsState,
  ShowActionsReducer,
  defaultState as showActionsDefaultState,
} from './show-actions/show-actions.reducer';
import {
  IAllShowsState,
  AllShowsReducer,
  defaultState as allShowsDefaultState,
} from './all-shows/all-shows.reducer';

export interface IShowsState {
  dictionary: FlexibleImmutableObject<IShowDictionaryState>;
  showActions: FlexibleImmutableObject<IShowActionsState>;
  allShows: FlexibleImmutableObject<IAllShowsState>;
}

export const defaultState: FlexibleImmutableObject<IShowsState> = immutable.from({
  dictionary: showDictionaryDefaultState,
  showActions: showActionsDefaultState,
  allShows: allShowsDefaultState,
});

@Injectable()
export class ShowsReducer {
  reducer: (state: FlexibleImmutableObject<IShowsState>, action: FSA<any, any>) => FlexibleImmutableObject<IShowsState>;

  constructor(
    private dictionaryReducer: ShowDictionaryReducer,
    private allShowsReducer: AllShowsReducer,
    private showActionsReducer: ShowActionsReducer,
  ) {
    this.reducer = combineReducers<FlexibleImmutableObject<IShowsState>>({
      dictionary: dictionaryReducer.reducer,
      allShows: allShowsReducer.reducer,
      showActions: showActionsReducer.reducer,
    });
  }
}
