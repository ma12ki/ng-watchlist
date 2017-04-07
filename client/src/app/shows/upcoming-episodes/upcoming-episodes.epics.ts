import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';
import { ApolloStore } from 'apollo-client/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UpcomingEpisodesService } from './upcoming-episodes.service';
import { UpcomingEpisodesActions } from './upcoming-episodes.actions';
import { ShowActions } from '../show-actions/show-actions.actions';
import { items } from './upcoming-episodes.selectors';

@Injectable()
export class UpcomingEpisodesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: UpcomingEpisodesService,
    private actions: UpcomingEpisodesActions
  ) {
    this.epics = [
      this.loadUpcomingEpisodes,
      this.loadMoreUpcomingEpisodes,
      this.refreshOnTrack,
      this.refreshOnUntrack,
      this.refreshOnPostpone,
    ];
  }

  loadUpcomingEpisodes = action$ => action$
    .ofType(UpcomingEpisodesActions.LOAD_START)
    .switchMap((action) => this.service.loadUpcomingEpisodes({
        maxDate: action.payload.maxDate,
      })
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

  loadMoreUpcomingEpisodes = action$ => action$
    .ofType(UpcomingEpisodesActions.LOAD_MORE_START)
    .switchMap((action) => this.service.loadMoreUpcomingEpisodes({
        cursor: action.payload.cursor,
      })
      .map(data => this.actions.loadMoreSucceeded(data))
      .catch(err => of(this.actions.loadMoreFailed(err))));

  refreshOnTrack = (action$, store: ApolloStore) => action$
      .ofType(ShowActions.TRACK_SUCCEEDED)
      .map(() => {
        return this.actions.loadStart({
          maxDate: this.getMaxPremiereDate(store),
        });
      });

  refreshOnUntrack = (action$, store: ApolloStore) => action$
    .ofType(ShowActions.UNTRACK_SUCCEEDED)
      .map(() => {
        return this.actions.loadStart({
          maxDate: this.getMaxPremiereDate(store),
        });
      });

  refreshOnPostpone = (action$, store: ApolloStore) => action$
    .ofType(ShowActions.POSTPONE_EPISODES_SUCCEEDED)
      .map(() => {
        return this.actions.loadStart({
          maxDate: this.getMaxPremiereDate(store),
        });
      });

  private getMaxPremiereDate(store: ApolloStore): string {
    return items(store.getState()).reduce((max, item) => {
      return max > item.premiereDate ? max : item.premiereDate;
    }, new Date().toISOString());
  }
}
