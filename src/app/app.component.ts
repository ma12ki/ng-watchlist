import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Action, combineReducers, applyMiddleware, ReducersMapObject } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { client } from './apollo-client-store';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


import { IRootState, ReduxRoots } from './app.redux-roots';

import { AppActions } from './app.actions';
import { ElephantsEpics } from './elephants/elephants.epics';
import { elephantsReducer } from './elephants/elephants.reducer';

import { LionsEpics } from './lions/lions.epics';
import { lionsReducer } from './lions/lions.reducer';

import { UpcomingEpics } from './upcoming/upcoming.epics';
import { upcomingReducer } from './upcoming/upcoming.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cities$: Observable<any>;

  constructor(
    private apollo: Apollo,
    private ngRedux: NgRedux<IRootState>,
    private actions: AppActions,
    reduxRoots: ReduxRoots,
  ) {

    ngRedux.configureStore(
      reduxRoots.rootReducer,
      {},
      reduxRoots.rootEpic,
      reduxRoots.middlewares
    );
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadData());
    this.loadCities();
  }

  loadCities() {
    const query = gql`
      query CitiesQuery {
        allCities {
          name
          country
        }
      }
    `;

    this.cities$ = this.apollo.watchQuery<any>({
      query: query
    }).map(({data}) => data.allCities);
  }
}
