import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';


@Injectable()
export class ShowsEpics {
  epics: Epic<Action>[];

  constructor() {
    this.epics = [];
  }
}
