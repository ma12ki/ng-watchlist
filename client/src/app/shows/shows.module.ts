import { NgModule } from '@angular/core';

import { ShowsSharedModule } from './shared/shared.module';
import { ShowActionsModule } from './show-actions/show-actions.module';
import { AllShowsModule } from './all-shows/all-shows.module';
import { AvailableEpisodesModule } from './available-episodes/available-episodes.module';
import { UpcomingEpisodesModule } from './upcoming-episodes/upcoming-episodes.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ShowsReducer } from './shows.reducer';
import { ShowsEpics } from './shows.epics';

import { routing } from './shows.routes';

@NgModule({
  imports: [
    ShowsSharedModule,
    ShowActionsModule,
    AllShowsModule,
    AvailableEpisodesModule,
    UpcomingEpisodesModule,
    routing,
  ],
  providers: [
    ShowsReducer,
    ShowsEpics,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    AllShowsModule,
    AvailableEpisodesModule,
    UpcomingEpisodesModule,
  ],
})
export class ShowsModule { }
