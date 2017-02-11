import { ImmutableObject } from 'seamless-immutable';

import { IDictionary } from '../dictionary.interfaces';

export interface IShowType {
  code: string;
  label: string;
  recurring: boolean;
}

/* tslint:disable:no-empty-interface */
export interface IShowTypes extends IDictionary<IShowType> { }

export interface IImmutableShowTypes extends ImmutableObject<IShowTypes> {}
