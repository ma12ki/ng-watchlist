import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
