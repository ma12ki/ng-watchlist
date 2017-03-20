import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ValueToDateDirective } from './date-input-to-date/value-to-date.directive';
import { MainHeadingComponent } from './main-heading/main-heading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ValueToDateDirective,
    MainHeadingComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ValueToDateDirective,
    MainHeadingComponent,
  ],
})
export class SharedModule { }
