import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment';

import { ShowActionsModule } from '../show-actions/show-actions.module';
import { AllShowsService } from './all-shows.service';
import { AllShowsActions } from './all-shows.actions';
import { AllShowsEpics } from './all-shows.epics';
import { AllShowsReducer } from './all-shows.reducer';
import { AllShowsListComponent } from './all-shows-list/all-shows-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    MomentModule,
    ShowActionsModule,
  ],
  declarations: [
    AllShowsListComponent,
  ],
  providers: [
    AllShowsService,
    AllShowsActions,
    AllShowsEpics,
    AllShowsReducer,
  ],
  exports: [
    AllShowsListComponent,
  ]
})
export class AllShowsModule { }