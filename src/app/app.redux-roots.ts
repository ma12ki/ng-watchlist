import { DevToolsExtension } from '@angular-redux/store/lib/components/dev-tools';
import { Injectable } from '@angular/core';
import { applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { client } from './apollo-client-store';
import { IImmutableUpcomingState, upcomingReducer, UpcomingReducer } from './upcoming/upcoming.reducer';
import { UpcomingEpics } from './upcoming/upcoming.epics';

export interface IRootState {
  elephants?: any;
  lions?: any;
  upcoming?: IImmutableUpcomingState;
  apollo?: any;
}

@Injectable()
export class ReduxRoots {
  constructor(
    private upcomingReducer: UpcomingReducer,
    private upcomingEpics: UpcomingEpics,
    private devTools: DevToolsExtension,
  ) { }

  get rootReducer() {
    return combineReducers({
      upcoming: this.upcomingReducer.reducer,
      apollo: client.reducer() as any,
    });
  }

  get rootEpic() {
    return [ createEpicMiddleware(
      combineEpics(
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
