import * as immutable from 'seamless-immutable';
import { ImmutableObject } from 'seamless-immutable';

import { UpcomingActions } from './upcoming.actions';
import { IPayloadAction } from '../utils/payload-action';

interface IUpcomingState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

const defaultState: ImmutableObject<IUpcomingState> = immutable.from({
  items: [],
  isFetching: false,
  error: null
});

export function upcomingReducer(state = defaultState, action: IPayloadAction): ImmutableObject<IUpcomingState> {
  switch (action.type) {
    case UpcomingActions.LOAD_START:
      return state.merge({
        isFetching: true,
        error: null
      });
    case UpcomingActions.LOAD_SUCCEEDED:
      return state.merge({
        items: action.payload,
        error: null,
        isFetching: false
      });
    case UpcomingActions.LOAD_FAILED:
      return state.merge({
        error: action.error,
        isFetching: false
      });
  }

  return state;
}
