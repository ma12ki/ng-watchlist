import { DevToolsExtension } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerReducer } from '@angular-redux/router';

import { client } from './apollo-client-store';
import { IImmutableDictionaryState, DictionaryReducer } from './dictionary';
import { DictionaryEpics } from './dictionary/dictionary.epics';
import { IImmutableUpcomingState, UpcomingReducer } from './upcoming/upcoming.reducer';
import { UpcomingEpics } from './upcoming/upcoming.epics';
import { IImmutableAllShowsState, AllShowsReducer } from './all-shows/all-shows.reducer';
import { AllShowsEpics } from './all-shows/all-shows.epics';
import { IImmutableAvailableEpisodesState, AvailableEpisodesReducer } from './available-episodes/available-episodes.reducer';
import { AvailableEpisodesEpics } from './available-episodes/available-episodes.epics';

export interface IRootState {
  apollo?: any;
  router?: any;
  dictionary?: IImmutableDictionaryState;
  upcoming?: IImmutableUpcomingState;
  allShows?: IImmutableAllShowsState;
  availableEpisodes?: IImmutableAvailableEpisodesState;
}

@Injectable()
export class ReduxRoots {
  constructor(
    private devTools: DevToolsExtension,
    private dictionaryReducer: DictionaryReducer,
    private dictionaryEpics: DictionaryEpics,
    private upcomingReducer: UpcomingReducer,
    private upcomingEpics: UpcomingEpics,
    private allShowsReducer: AllShowsReducer,
    private allShowsEpics: AllShowsEpics,
    private availableEpisodesReducer: AvailableEpisodesReducer,
    private availableEpisodesEpics: AvailableEpisodesEpics,
  ) { }

  get rootReducer() {
    return combineReducers<IRootState>({
      apollo: client.reducer() as any,
      router: routerReducer,
      dictionary: this.dictionaryReducer.reducer,
      upcoming: this.upcomingReducer.reducer,
      allShows: this.allShowsReducer.reducer,
      availableEpisodes: this.availableEpisodesReducer.reducer,
    });
  }

  get rootEpic() {
    return [ createEpicMiddleware(
      combineEpics(
        ...this.dictionaryEpics.epics,
        ...this.upcomingEpics.epics,
        ...this.allShowsEpics.epics,
        ...this.availableEpisodesEpics.epics,
      )
    ) ];
  }

  get middlewares() {
      return [
        applyMiddleware(client.middleware()),
        this.devTools.isEnabled() ? this.devTools.enhancer() : null
      ];
  }
}
