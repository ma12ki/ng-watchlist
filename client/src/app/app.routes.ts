import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AllShowsListComponent } from './all-shows/all-shows-list/all-shows-list.component';
import { NewShowComponent } from './show/new-show/new-show.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'all', component: AllShowsListComponent },
  { path: 'new', component: NewShowComponent },
  { path: '**', component: NotFoundComponent },
];
