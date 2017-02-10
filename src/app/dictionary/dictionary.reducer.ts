import { combineReducers } from 'redux';
import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';
import { FSA } from 'flux-standard-action';

import {
  IImmutableShowTypes,
  defaultState as showTypesDefaultState,
  ShowTypesReducer
} from './show-types';

interface IDictionaryState {
  showTypes: IImmutableShowTypes;
}

/* tslint:disable:no-empty-interface */
export interface IImmutableDictionaryState extends ImmutableObject<IDictionaryState> {};

const defaultState: IImmutableDictionaryState = immutable.from({
  showTypes: showTypesDefaultState
});

@Injectable()
export class DictionaryReducer {
  constructor(
    private showTypesReducer: ShowTypesReducer
  ) { }

  get reducer(): (state: IImmutableDictionaryState, action: FSA<any, any>) => IImmutableDictionaryState {
    return combineReducers<IImmutableDictionaryState>({
      showTypes: this.showTypesReducer.reducer
    });
  };
}
