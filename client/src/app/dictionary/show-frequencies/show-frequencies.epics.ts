import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ShowFrequenciesService } from './show-frequencies.service';
import { ShowFrequenciesActions } from './show-frequencies.actions';

@Injectable()
export class ShowFrequenciesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: ShowFrequenciesService,
    private actions: ShowFrequenciesActions
  ) {
    this.epics = [ this.loadUpcoming ];
  }

  loadUpcoming = (action$, store) => action$
    .ofType(ShowFrequenciesActions.LOAD_START)
    .switchMap((_) => this.service.load()
      .map(data => this.actions.loadSuccess(data))
      .catch(err => of(this.actions.loadError(err))));
}
