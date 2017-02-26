import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UpcomingEpisodesModule } from '../upcoming-episodes/upcoming-episodes.module';
import { AvailableEpisodesModule } from '../available-episodes/available-episodes.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AvailableEpisodesModule,
    UpcomingEpisodesModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
