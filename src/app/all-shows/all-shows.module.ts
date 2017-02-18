import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { NewShowComponent } from './new-show/new-show.component';
import { EpisodesPreviewComponent } from './episodes-preview/episodes-preview.component';
import { EpisodesPreviewService } from './episodes-preview/episodes-preview.service';

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
  ],
  providers: [
    EpisodesPreviewService,
  ],
  exports: [
    NewShowComponent,
  ]
})
export class AllShowsModule { }
