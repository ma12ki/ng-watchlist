import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { NgReduxFormModule } from '@angular-redux/form';
import { applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { routerReducer } from '@angular-redux/router';
import { ApolloModule } from 'apollo-angular/build/src/ApolloModule';

import { client, provideClient } from './apollo-client-store';

import { ShowsEpics } from './shows/shows.epics';

import {
  IImmutableShowsState,
  defaultState as showsDefaultState
} from './shows/shows.reducer';

export interface IRootState {
  apollo?: any;
  router?: any;
  shows: IImmutableShowsState;
}

export const defaultState: IRootState = {
  shows: showsDefaultState,
};

@NgModule({
  imports: [
    ApolloModule.withClient(provideClient),
    NgReduxModule,
    NgReduxRouterModule,
    NgReduxFormModule,
  ],
  exports: [
    ApolloModule,
    NgReduxModule,
    NgReduxRouterModule,
    NgReduxFormModule,
  ]
})
export class AppReduxModule {
  constructor(
    private ngRedux: NgRedux<IRootState>,
    private ngReduxRouter: NgReduxRouter,
    private devTools: DevToolsExtension,
    private showsEpics: ShowsEpics,
  ) {
    ngRedux.configureStore(
      this.rootReducer,
      defaultState,
      this.rootEpic,
      this.middlewares,
    );
    ngReduxRouter.initialize();
  }

  get rootReducer() {
    return combineReducers<IRootState>({
      apollo: client.reducer() as any,
      router: routerReducer,
    });
  }

  get rootEpic() {
    return [ createEpicMiddleware(
      combineEpics(
        ...this.showsEpics.epics,
      )
    ) ];
  }

  get middlewares() {
    return [
      applyMiddleware(client.middleware()),
      this.devTools.isEnabled() ? this.devTools.enhancer() : null,
    ];
  }
}
