import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowListComponent } from './show-list/show-list.component';
import { UpcomingEpics } from './upcoming.epics';
import { UpcomingService } from './upcoming.service';
import { UpcomingActions } from './upcoming.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UpcomingEpics,
    UpcomingService,
    UpcomingActions,
  ],
  declarations: [ShowListComponent],
  exports: [
    ShowListComponent
  ]
})
export class UpcomingModule { }
