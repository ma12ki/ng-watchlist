import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewShowComponent } from './show/new-show/new-show.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'shows/new', component: NewShowComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
