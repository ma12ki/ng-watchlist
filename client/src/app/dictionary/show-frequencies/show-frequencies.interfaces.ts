import { ImmutableObject } from 'seamless-immutable';

import { IDictionary } from '../dictionary.interfaces';

export interface IShowFrequency {
  code: string;
  label: string;
}

/* tslint:disable:no-empty-interface */
export interface IShowFrequencies extends IDictionary<IShowFrequency> { }

export interface IImmutableFrequenciesTypes extends ImmutableObject<IShowFrequencies> {}
