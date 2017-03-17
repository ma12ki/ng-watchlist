import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { categories, frequencies, ICategory, IFrequency } from '../../../../../common/dictionary';
export { categories, frequencies, ICategory, IFrequency };

interface IShowDictionaryState {
  categories: ICategory[];
  frequencies: IFrequency[];
}

/* tslint:disable:no-empty-interface */
export interface IImmutableShowDictionaryState extends ImmutableObject<IShowDictionaryState> {};

export const defaultState: IImmutableShowDictionaryState = immutable.from({
  categories,
  frequencies,
});

@Injectable()
export class ShowDictionaryReducer {
  reducer: (state: IImmutableShowDictionaryState) => IImmutableShowDictionaryState;

  constructor() {
    this.reducer = upcomingEpisodesReducer;
  }
}

export function upcomingEpisodesReducer(state = defaultState): IImmutableShowDictionaryState {
  return state;
}
