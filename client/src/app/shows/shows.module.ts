import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsReducer } from './shows.reducer';
import { ShowsEpics } from './shows.epics';
// import { ShowActionsModule } from './show-actions/show-actions.module';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ShowsReducer,
    ShowsEpics,
  ],
  declarations: []
})
export class ShowsModule { }
