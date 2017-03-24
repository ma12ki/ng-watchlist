import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { FSA } from 'flux-standard-action/lib';
import { combineReducers } from 'redux';

import { FlexibleImmutableObject } from '../shared/shared.typings';

import {
  IShowDictionaryState,
  ShowDictionaryReducer,
  defaultState as showDictionaryDefaultState,
} from './shared/dictionary/dictionary.reducer';
import {
  IShowState,
  ShowReducer,
  defaultState as showDefaultState,
} from './show/show.reducer';
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
import {
  IAvailableEpisodesState,
  AvailableEpisodesReducer,
  defaultState as availableEpisodesDefaultState,
} from './available-episodes/available-episodes.reducer';
import {
  IUpcomingEpisodesState,
  UpcomingEpisodesReducer,
  defaultState as upcomingEpisodesDefaultState,
} from './upcoming-episodes/upcoming-episodes.reducer';

export interface IShowsState {
  dictionary: FlexibleImmutableObject<IShowDictionaryState>;
  show: FlexibleImmutableObject<IShowState>;
  showActions: FlexibleImmutableObject<IShowActionsState>;
  allShows: FlexibleImmutableObject<IAllShowsState>;
  availableEpisodes: FlexibleImmutableObject<IAvailableEpisodesState>;
  upcomingEpisodes: FlexibleImmutableObject<IUpcomingEpisodesState>;
}

export const defaultState: FlexibleImmutableObject<IShowsState> = immutable.from({
  dictionary: showDictionaryDefaultState,
  show: showDefaultState,
  showActions: showActionsDefaultState,
  allShows: allShowsDefaultState,
  availableEpisodes: availableEpisodesDefaultState,
  upcomingEpisodes: upcomingEpisodesDefaultState,
});

@Injectable()
export class ShowsReducer {
  reducer: (state: FlexibleImmutableObject<IShowsState>, action: FSA<any, any>) => FlexibleImmutableObject<IShowsState>;

  constructor(
    private dictionaryReducer: ShowDictionaryReducer,
    private showReducer: ShowReducer,
    private allShowsReducer: AllShowsReducer,
    private showActionsReducer: ShowActionsReducer,
    private availableEpisodesReducer: AvailableEpisodesReducer,
    private upcomingEpisodesReducer: UpcomingEpisodesReducer,
  ) {
    this.reducer = combineReducers<FlexibleImmutableObject<IShowsState>>({
      dictionary: dictionaryReducer.reducer,
      show: showReducer.reducer,
      allShows: allShowsReducer.reducer,
      showActions: showActionsReducer.reducer,
      availableEpisodes: availableEpisodesReducer.reducer,
      upcomingEpisodes: upcomingEpisodesReducer.reducer,
    });
  }
}
