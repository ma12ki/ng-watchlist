import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UpcomingEpisodesService } from './upcoming-episodes.service';
import { UpcomingEpisodesActions } from './upcoming-episodes.actions';

@Injectable()
export class UpcomingEpisodesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: UpcomingEpisodesService,
    private actions: UpcomingEpisodesActions
  ) {
    this.epics = [ this.loadAllShows ];
  }

  loadAllShows = action$ => action$
    .ofType(UpcomingEpisodesActions.LOAD_START)
    .switchMap((_) => this.service.loadUpcomingEpisodes()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));
}
