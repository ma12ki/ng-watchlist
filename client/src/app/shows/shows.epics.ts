import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';

import { ShowActionsEpics } from './show-actions/show-actions.epics';
import { AllShowsEpics } from './all-shows/all-shows.epics';
import { AvailableEpisodesEpics } from './available-episodes/available-episodes.epics';
import { UpcomingEpisodesEpics } from './upcoming-episodes/upcoming-episodes.epics';

@Injectable()
export class ShowsEpics {
  epics: Epic<Action>[];

  constructor(
    private showActionsEpics: ShowActionsEpics,
    private allShowsEpics: AllShowsEpics,
    private availableEpisodesEpics: AvailableEpisodesEpics,
    private upcomingEpisodesEpics: UpcomingEpisodesEpics,
  ) {
    this.epics = [
      ...showActionsEpics.epics,
      ...allShowsEpics.epics,
      ...availableEpisodesEpics.epics,
      ...upcomingEpisodesEpics.epics,
    ];
  }
}
