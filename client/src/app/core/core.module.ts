import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { ShowsModule } from '../shows/shows.module';
import { DashboardModule } from '../dashboard/dashboard.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    DashboardModule,
    ShowsModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    DashboardModule,
    ShowsModule,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
})
export class CoreModule { }
