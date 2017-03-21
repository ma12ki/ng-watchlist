import { NgModule } from '@angular/core';

import { ShowsSharedModule } from '../shared/shared.module';
import { ShowActionsModule } from '../show-actions/show-actions.module';
import { ShowService } from './show.service';
import { ShowActions } from './show.actions';
import { ShowEpics } from './show.epics';
import { ShowReducer } from './show.reducer';

import { NewShowComponent } from './new-show/new-show.component';
import { EpisodesPreviewComponent } from './episodes-preview/episodes-preview.component';
import { EpisodesPreviewService } from './episodes-preview/episodes-preview.service';

@NgModule({
  imports: [
    ShowsSharedModule,
    ShowActionsModule,
  ],
  declarations: [
    NewShowComponent,
    EpisodesPreviewComponent,
  ],
  providers: [
    ShowService,
    ShowActions,
    ShowEpics,
    ShowReducer,
    EpisodesPreviewService,
  ],
  exports: [
    NewShowComponent,
  ]
})
export class ShowModule { }
