import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'angular2-moment';

import { ValueToDateDirective } from './date-input-to-date/value-to-date.directive';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { LoadingErrorInfoComponent } from './loading-error-info/loading-error-info.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    ValueToDateDirective,
    MainHeadingComponent,
    LoadingErrorInfoComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MomentModule,
    ValueToDateDirective,
    MainHeadingComponent,
    LoadingErrorInfoComponent,
  ],
})
export class SharedModule { }
