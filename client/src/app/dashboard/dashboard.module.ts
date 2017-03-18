import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowsModule } from '../shows/shows.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ShowsModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
