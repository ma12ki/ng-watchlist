import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { DateInputToDateModule } from '../date-input-to-date/date-input-to-date.module';
import { EpisodesPreviewService } from './episodes-preview/episodes-preview.service';
import { NewShowComponent } from './new-show/new-show.component';
import { NewShowContainerComponent } from './new-show-container/new-show-container.component';
import { EpisodesPreviewComponent } from './episodes-preview/episodes-preview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DateInputToDateModule,
    ReactiveFormsModule,
    MaterialModule,
    MomentModule
  ],
  providers: [
    EpisodesPreviewService
  ],
  declarations: [
    NewShowComponent,
    NewShowContainerComponent,
    EpisodesPreviewComponent,
  ],
  exports: [
    NewShowContainerComponent,
  ]
})
export class NewShowModule { }
