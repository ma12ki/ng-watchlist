import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { AppActions } from '../app.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { UpcomingService } from './upcoming.service';
import { UpcomingActions } from './upcoming.actions';

@Injectable()
export class UpcomingEpics {
  epics: Epic<Action>[];

  constructor(
    private service: UpcomingService,
    private actions: UpcomingActions
  ) {
    this.epics = [ this.loadUpcoming ];
  }

  loadUpcoming = action$ => action$
    .ofType(UpcomingActions.LOAD_START)
    .switchMap((_) => this.service.loadUpcoming()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));
}
