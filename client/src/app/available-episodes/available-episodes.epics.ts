import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { AppActions } from '../app.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AvailableEpisodesService } from './available-episodes.service';
import { AvailableEpisodesActions } from './available-episodes.actions';

@Injectable()
export class AvailableEpisodesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: AvailableEpisodesService,
    private actions: AvailableEpisodesActions
  ) {
    this.epics = [ this.loadAllShows ];
  }

  loadAllShows = action$ => action$
    .ofType(AvailableEpisodesActions.LOAD_START)
    .switchMap((_) => this.service.loadAvailableEpisodes()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));
}
