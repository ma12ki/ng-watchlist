import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowActionsModule } from './show-actions/show-actions.module';
import { AllShowsModule } from './all-shows/all-shows.module';
import { AvailableEpisodesModule } from './available-episodes/available-episodes.module';
import { UpcomingEpisodesModule } from './upcoming-episodes/upcoming-episodes.module';

import { ShowDictionaryReducer } from './dictionary/dictionary.reducer';
import { ShowsReducer } from './shows.reducer';
import { ShowsEpics } from './shows.epics';

@NgModule({
  imports: [
    CommonModule,
    ShowActionsModule,
    AllShowsModule,
    AvailableEpisodesModule,
    UpcomingEpisodesModule,
  ],
  providers: [
    ShowDictionaryReducer,
    ShowsReducer,
    ShowsEpics,
  ],
  declarations: [],
  exports: [
    AllShowsModule,
    AvailableEpisodesModule,
    UpcomingEpisodesModule,
  ],
})
export class ShowsModule { }
