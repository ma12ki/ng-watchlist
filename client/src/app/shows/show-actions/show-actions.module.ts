import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AddToggleComponent } from './add-toggle/add-toggle.component';
import { ShowActionsService } from './show-actions.service';
import { ShowActions } from './show-actions.actions';
import { ShowActionsReducer } from './show-actions.reducer';
import { ShowActionsEpics } from './show-actions.epics';
import { TrackToggleComponent } from './track-toggle/track-toggle.component';
import { WatchedToggleComponent } from './watched-toggle/watched-toggle.component';
import { PostponeComponent } from './postpone/postpone.component';
import { PostponeModalComponent } from './postpone-modal/postpone-modal.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    AddToggleComponent,
    TrackToggleComponent,
    WatchedToggleComponent,
    PostponeComponent,
    PostponeModalComponent,
  ],
  providers: [
    ShowActionsService,
    ShowActions,
    ShowActionsEpics,
    ShowActionsReducer,
  ],
  exports: [
    AddToggleComponent,
    TrackToggleComponent,
    WatchedToggleComponent,
    PostponeComponent,
  ],
  entryComponents: [
    PostponeModalComponent,
  ],
})
export class ShowActionsModule { }
