import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ShowListComponent } from './show-list/show-list.component';
import { UpcomingEpics } from './upcoming.epics';
import { UpcomingService } from './upcoming.service';
import { UpcomingActions } from './upcoming.actions';
import { UpcomingReducer } from './upcoming.reducer';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    UpcomingEpics,
    UpcomingService,
    UpcomingActions,
    UpcomingReducer,
  ],
  declarations: [
    ShowListComponent
  ],
  exports: [
    ShowListComponent,
  ]
})
export class UpcomingModule { }
