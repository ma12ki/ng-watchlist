import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: 'app/shows/shows.module#ShowsModule' },
      { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
