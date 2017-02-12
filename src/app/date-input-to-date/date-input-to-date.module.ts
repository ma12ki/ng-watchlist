import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueToDateDirective } from './value-to-date.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValueToDateDirective
  ],
  exports: [
    ValueToDateDirective
  ]
})
export class DateInputToDateModule { }
