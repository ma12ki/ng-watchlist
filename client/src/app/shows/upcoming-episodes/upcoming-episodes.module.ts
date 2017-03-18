import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { ShowsSharedModule } from '../shared/shared.module';

import { UpcomingEpisodesComponent } from './upcoming-episodes/upcoming-episodes.component';
import { UpcomingEpisodesListComponent } from './upcoming-episodes-list/upcoming-episodes-list.component';

import { UpcomingEpisodesReducer } from './upcoming-episodes.reducer';
import { UpcomingEpisodesActions } from './upcoming-episodes.actions';
import { UpcomingEpisodesEpics } from './upcoming-episodes.epics';
import { UpcomingEpisodesService } from './upcoming-episodes.service';

@NgModule({
  imports: [
    CommonModule,
    ShowsSharedModule,
    MaterialModule,
    MomentModule,
  ],
  declarations: [
    UpcomingEpisodesComponent,
    UpcomingEpisodesListComponent,
  ],
  providers: [
    UpcomingEpisodesService,
    UpcomingEpisodesActions,
    UpcomingEpisodesEpics,
    UpcomingEpisodesReducer,
  ],
  exports: [
    UpcomingEpisodesComponent,
  ],
})
export class UpcomingEpisodesModule { }
