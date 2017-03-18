import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { AvailableEpisodesReducer } from './available-episodes.reducer';
import { AvailableEpisodesActions } from './available-episodes.actions';
import { AvailableEpisodesEpics } from './available-episodes.epics';
import { AvailableEpisodesService } from './available-episodes.service';
import { ShowActionsModule } from '../show-actions/show-actions.module';

import { AvailableEpisodesComponent } from './available-episodes/available-episodes.component';
import { AvailableEpisodesListComponent } from './available-episodes-list/available-episodes-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MomentModule,
    ShowActionsModule,
  ],
  declarations: [
    AvailableEpisodesComponent,
    AvailableEpisodesListComponent,
  ],
  providers: [
    AvailableEpisodesService,
    AvailableEpisodesActions,
    AvailableEpisodesEpics,
    AvailableEpisodesReducer,
  ],
  exports: [
    AvailableEpisodesComponent,
  ],
})
export class AvailableEpisodesModule { }
