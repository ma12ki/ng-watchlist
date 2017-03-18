import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';

import { ShowActionsEpics } from './show-actions/show-actions.epics';
import { AllShowsEpics } from './all-shows/all-shows.epics';

@Injectable()
export class ShowsEpics {
  epics: Epic<Action>[];

  constructor(
    private showActionsEpics: ShowActionsEpics,
    private allShowsEpics: AllShowsEpics,
  ) {
    this.epics = [
      ...showActionsEpics.epics,
      ...allShowsEpics.epics,
    ];
  }
}
