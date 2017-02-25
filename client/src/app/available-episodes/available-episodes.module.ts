import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { AvailableEpisodesListComponent } from './available-episodes-list/available-episodes-list.component';
import { AvailableEpisodesReducer } from './available-episodes.reducer';
import { AvailableEpisodesActions } from './available-episodes.actions';
import { AvailableEpisodesEpics } from './available-episodes.epics';
import { AvailableEpisodesService } from './available-episodes.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MomentModule,
  ],
  declarations: [
    AvailableEpisodesListComponent
  ],
  providers: [
    AvailableEpisodesService,
    AvailableEpisodesActions,
    AvailableEpisodesEpics,
    AvailableEpisodesReducer,
  ],
  exports: [
    AvailableEpisodesListComponent
  ],
})
export class AvailableEpisodesModule { }
