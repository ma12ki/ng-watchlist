import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { NewShowComponent } from './new-show/new-show.component';
import { EpisodesPreviewComponent } from './episodes-preview/episodes-preview.component';
import { EpisodesPreviewService } from './episodes-preview/episodes-preview.service';
import { AllShowsService } from './all-shows.service';
import { AllShowsActions } from './all-shows.actions';
import { AllShowsEpics } from './all-shows.epics';
import { AllShowsListComponent } from './all-shows-list/all-shows-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule,
  ],
  declarations: [
    NewShowComponent,
    EpisodesPreviewComponent,
    AllShowsListComponent,
  ],
  providers: [
    EpisodesPreviewService,
    AllShowsService,
    AllShowsActions,
    AllShowsEpics,
  ],
  exports: [
    NewShowComponent,
    AllShowsListComponent,
  ]
})
export class AllShowsModule { }
