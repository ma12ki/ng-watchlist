import { combineReducers } from 'redux';
import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { FSA } from 'flux-standard-action';

import {
  IImmutableFrequenciesTypes,
  showFrequenciesDefaultState,
  ShowFrequenciesReducer
} from './show-frequencies';

import {
  IImmutableShowTypes,
  showTypesDefaultState,
  ShowTypesReducer
} from './show-types';

interface IDictionaryState {
  showFrequencies: IImmutableFrequenciesTypes;
  showTypes: IImmutableShowTypes;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableDictionaryState extends ImmutableObject<IDictionaryState> {};

const defaultState: IImmutableDictionaryState = immutable.from({
  showFrequencies: showFrequenciesDefaultState,
  showTypes: showTypesDefaultState
});

@Injectable()
export class DictionaryReducer {
  constructor(
    private showFrequenciesReducer: ShowFrequenciesReducer,
    private showTypesReducer: ShowTypesReducer
  ) { }

  get reducer(): (state: IImmutableDictionaryState, action: FSA<any, any>) => IImmutableDictionaryState {
    return combineReducers<IImmutableDictionaryState>({
      showFrequencies: this.showFrequenciesReducer.reducer,
      showTypes: this.showTypesReducer.reducer
    });
  };
}
