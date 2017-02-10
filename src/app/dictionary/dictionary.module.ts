import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowFrequenciesService, ShowFrequenciesReducer, ShowFrequenciesActions, ShowFrequenciesEpics } from './show-frequencies';
import { ShowTypesService, ShowTypesReducer, ShowTypesActions, ShowTypesEpics } from './show-types';
import { DictionaryReducer } from './dictionary.reducer';
import { DictionaryEpics } from './dictionary.epics';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DictionaryReducer,
    DictionaryEpics,
    ShowFrequenciesService,
    ShowFrequenciesReducer,
    ShowFrequenciesActions,
    ShowFrequenciesEpics,
    ShowTypesReducer,
    ShowTypesActions,
    ShowTypesEpics,
    ShowTypesService
  ]
})
export class DictionaryModule { }
