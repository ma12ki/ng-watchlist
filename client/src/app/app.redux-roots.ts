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

export interface IRootState {
  dictionary?: IImmutableDictionaryState;
  upcoming?: IImmutableUpcomingState;
  apollo?: any;
  router?: any;
}

@Injectable()
export class ReduxRoots {
  constructor(
    private dictionaryReducer: DictionaryReducer,
    private dictionaryEpics: DictionaryEpics,
    private upcomingReducer: UpcomingReducer,
    private upcomingEpics: UpcomingEpics,
    private devTools: DevToolsExtension,
  ) { }

  get rootReducer() {
    return combineReducers<IRootState>({
      dictionary: this.dictionaryReducer.reducer,
      upcoming: this.upcomingReducer.reducer,
      apollo: client.reducer() as any,
      router: routerReducer
    });
  }

  get rootEpic() {
    return [ createEpicMiddleware(
      combineEpics(
        ...this.dictionaryEpics.epics,
        ...this.upcomingEpics.epics,
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
