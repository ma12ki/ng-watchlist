import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AvailableEpisodesService } from './available-episodes.service';
import { AvailableEpisodesActions } from './available-episodes.actions';
import { ShowActions } from '../show-actions/show-actions.actions';

@Injectable()
export class AvailableEpisodesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: AvailableEpisodesService,
    private actions: AvailableEpisodesActions,
    private showActions: ShowActions,
  ) {
    this.epics = [
      this.loadAvailableEpisodes,
      this.refreshOnTrack,
      this.refreshOnUntrack,
    ];
  }

  loadAvailableEpisodes = action$ => action$
    .ofType(AvailableEpisodesActions.LOAD_START)
    .switchMap((_) => this.service.loadAvailableEpisodes()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));

  refreshOnTrack = action$ => action$
    .ofType(ShowActions.TRACK_SUCCEEDED)
    .map(() => this.actions.loadStart());

  refreshOnUntrack = action$ => action$
    .ofType(ShowActions.UNTRACK_SUCCEEDED)
    .map(() => this.actions.loadStart());
}
