import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ShowFrequenciesEpics } from './show-frequencies';
import { ShowTypesEpics } from './show-types';

@Injectable()
export class DictionaryEpics {
  epics: Epic<Action>[];

  constructor(
    private showFrequenciesEpics: ShowFrequenciesEpics,
    private showTypesEpics: ShowTypesEpics
  ) {
    this.epics = [
      ...this.showFrequenciesEpics.epics,
      ...this.showTypesEpics.epics
    ];
  }
}
