import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ShowTypesService } from './show-types.service';
import { ShowTypesActions } from './show-types.actions';

@Injectable()
export class ShowTypesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: ShowTypesService,
    private actions: ShowTypesActions
  ) {
    this.epics = [ this.loadUpcoming ];
  }

  loadUpcoming = (action$, store) => action$
    .map(a => {
      console.log(store);
      return a;
    })
    .ofType(ShowTypesActions.LOAD_START)
    .switchMap((_) => this.service.load()
      .map(data => this.actions.loadSuccess(data))
      .catch(err => of(this.actions.loadError(err))));
}
