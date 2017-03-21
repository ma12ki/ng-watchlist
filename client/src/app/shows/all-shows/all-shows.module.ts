import { NgModule } from '@angular/core';

import { ShowsSharedModule } from '../shared/shared.module';
import { ShowActionsModule } from '../show-actions/show-actions.module';
import { AllShowsService } from './all-shows.service';
import { AllShowsActions } from './all-shows.actions';
import { AllShowsEpics } from './all-shows.epics';
import { AllShowsReducer } from './all-shows.reducer';

import { AllShowsListComponent } from './all-shows-list/all-shows-list.component';
import { AllShowsComponent } from './all-shows/all-shows.component';

@NgModule({
  imports: [
    ShowsSharedModule,
    ShowActionsModule,
  ],
  declarations: [
    AllShowsListComponent,
    AllShowsComponent,
  ],
  providers: [
    AllShowsService,
    AllShowsActions,
    AllShowsEpics,
    AllShowsReducer,
  ],
  exports: [
    AllShowsComponent,
  ]
})
export class AllShowsModule { }
