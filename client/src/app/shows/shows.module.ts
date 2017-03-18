import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsSharedModule } from './shared/shared.module';
import { ShowActionsModule } from './show-actions/show-actions.module';
import { AllShowsModule } from './all-shows/all-shows.module';
import { AvailableEpisodesModule } from './available-episodes/available-episodes.module';
import { UpcomingEpisodesModule } from './upcoming-episodes/upcoming-episodes.module';

import { ShowsReducer } from './shows.reducer';
import { ShowsEpics } from './shows.epics';

@NgModule({
  imports: [
    CommonModule,
    ShowsSharedModule,
    ShowActionsModule,
    AllShowsModule,
    AvailableEpisodesModule,
    UpcomingEpisodesModule,
  ],
  providers: [
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
