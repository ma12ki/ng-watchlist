import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowTypesService, ShowTypesReducer, ShowTypesActions, ShowTypesEpics } from './show-types';
import { DictionaryReducer } from './dictionary.reducer';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DictionaryReducer,
    ShowTypesReducer,
    ShowTypesActions,
    ShowTypesEpics,
    ShowTypesService
  ]
})
export class DictionaryModule { }
