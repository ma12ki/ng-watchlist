import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    ValueToDateDirective,
    MainHeadingComponent,
  ],
})
export class SharedModule { }
