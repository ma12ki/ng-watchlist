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
import { IImmutableUpcomingEpisodesState, UpcomingEpisodesReducer } from './upcoming-episodes/upcoming-episodes.reducer';
import { UpcomingEpisodesEpics } from './upcoming-episodes/upcoming-episodes.epics';
import { IImmutableShowActionsState, ShowActionsReducer } from './show-actions/show-actions.reducer';
import { ShowActionsEpics } from './show-actions/show-actions.epics';

export interface IRootState {
  apollo?: any;
  router?: any;
  dictionary?: IImmutableDictionaryState;
  upcoming?: IImmutableUpcomingState;
  allShows?: IImmutableAllShowsState;
  availableEpisodes?: IImmutableAvailableEpisodesState;
  upcomingEpisodes?: IImmutableUpcomingEpisodesState;
  showActions?: IImmutableShowActionsState;
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
    private upcomingEpisodesReducer: UpcomingEpisodesReducer,
    private upcomingEpisodesEpics: UpcomingEpisodesEpics,
    private showActionsReducer: ShowActionsReducer,
    private showActionsEpics: ShowActionsEpics,
  ) { }

  get rootReducer() {
    return combineReducers<IRootState>({
      apollo: client.reducer() as any,
      router: routerReducer,
      dictionary: this.dictionaryReducer.reducer,
      upcoming: this.upcomingReducer.reducer,
      allShows: this.allShowsReducer.reducer,
      availableEpisodes: this.availableEpisodesReducer.reducer,
      upcomingEpisodes: this.upcomingEpisodesReducer.reducer,
      showActions: this.showActionsReducer.reducer,
    });
  }

  get rootEpic() {
    return [ createEpicMiddleware(
      combineEpics(
        ...this.dictionaryEpics.epics,
        ...this.upcomingEpics.epics,
        ...this.allShowsEpics.epics,
        ...this.availableEpisodesEpics.epics,
        ...this.upcomingEpisodesEpics.epics,
        ...this.showActionsEpics.epics,
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
