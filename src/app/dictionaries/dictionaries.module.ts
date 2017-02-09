import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionariesService } from './dictionaries.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DictionariesService
  ]
})
export class DictionariesModule { }
