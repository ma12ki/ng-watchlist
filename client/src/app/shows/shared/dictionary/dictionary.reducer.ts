import { Injectable } from '@angular/core';
import * as immutable from 'seamless-immutable';

import { FlexibleImmutableObject } from '../../../shared/shared.typings';

import { categories, frequencies, ICategory, IFrequency } from '../../../../../../common/dictionary';

export interface IShowDictionaryState {
  categories: ICategory[];
  frequencies: IFrequency[];
}

export const defaultState: FlexibleImmutableObject<IShowDictionaryState> = immutable.from({
  categories,
  frequencies,
});

@Injectable()
export class ShowDictionaryReducer {
  reducer: (state: FlexibleImmutableObject<IShowDictionaryState>) => FlexibleImmutableObject<IShowDictionaryState>;

  constructor() {
    this.reducer = showDictionaryReducer;
  }
}

export function showDictionaryReducer(state = defaultState): FlexibleImmutableObject<IShowDictionaryState> {
  return state;
}
