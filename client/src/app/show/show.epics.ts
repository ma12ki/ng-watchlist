import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ShowService } from './show.service';
import { ShowActions } from './show.actions';

@Injectable()
export class ShowEpics {
  epics: Epic<Action>[];

  constructor(
    private service: ShowService,
    private actions: ShowActions
  ) {
    this.epics = [ this.saveShow ];
  }

  saveShow = action$ => action$
    .ofType(ShowActions.SAVE_START)
    .switchMap((...args) => {
      console.log(args);
      return this.service.saveShow({
        category: 'aaa',
        episodes: -20,
        frequency: 'asdasd',
        name: 'asdasdg',
        premiereDate: 'sadasdas',
        season: -100,
      });
    })
      .map(data => this.actions.saveSucceeded(data))
      .catch(err => of(this.actions.saveFailed(err)));
}
