import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AddToggleComponent } from './add-toggle/add-toggle.component';
import { ShowActionsService } from './show-actions.service';
import { ShowActions } from './show-actions.actions';
import { ShowActionsReducer } from './show-actions.reducer';
import { ShowActionsEpics } from './show-actions.epics';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    AddToggleComponent
  ],
  providers: [
    ShowActionsService,
    ShowActions,
    ShowActionsEpics,
    ShowActionsReducer,
  ],
  exports: [
    AddToggleComponent,
  ]
})
export class ShowActionsModule { }
