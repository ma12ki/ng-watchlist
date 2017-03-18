import { ImmutableObject } from 'seamless-immutable';

export type FlexibleImmutableObject<T> = T & ImmutableObject<T>;
