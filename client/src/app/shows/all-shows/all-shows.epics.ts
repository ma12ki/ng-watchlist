import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AllShowsService } from './all-shows.service';
import { AllShowsActions } from './all-shows.actions';

@Injectable()
export class AllShowsEpics {
  epics: Epic<Action>[];

  constructor(
    private service: AllShowsService,
    private actions: AllShowsActions
  ) {
    this.epics = [ this.loadAllShows ];
  }

  loadAllShows = action$ => action$
    .ofType(AllShowsActions.LOAD_START)
    .switchMap((_) => this.service.loadAllShows()
      .map(data => this.actions.loadSucceeded(data))
      .catch(err => of(this.actions.loadFailed(err))));
}
