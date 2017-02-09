import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { AppActions } from '../app.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { DictionariesService } from './dictionaries.service';
import { DictionariesActions } from './dictionaries.actions';

@Injectable()
export class DictionariesEpics {
  epics: Epic<Action>[];

  constructor(
    private service: DictionariesService,
    private actions: DictionariesActions
  ) {
    this.epics = [ this.loadUpcoming ];
  }

  loadUpcoming = (action$, store) => action$
    .map(a => {
      console.log(store);
      return a;
    })
    .ofType(DictionariesActions.LOAD_SHOW_TYPES)
    .switchMap((_) => this.service.loadShowTypes()
      .map(data => this.actions.loadShowTypesSucceeded(data))
      .catch(err => of(this.actions.loadShowTypesError(err))));
}
