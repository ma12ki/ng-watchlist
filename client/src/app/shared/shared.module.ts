import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ValueToDateDirective } from './date-input-to-date/value-to-date.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ValueToDateDirective,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ValueToDateDirective,
  ],
})
export class SharedModule { }
