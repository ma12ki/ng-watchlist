import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowActionsModule } from './show-actions/show-actions.module';

import { ShowsReducer } from './shows.reducer';
import { ShowsEpics } from './shows.epics';


@NgModule({
  imports: [
    CommonModule,
    ShowActionsModule,
  ],
  providers: [
    ShowsReducer,
    ShowsEpics,
  ],
  declarations: []
})
export class ShowsModule { }
