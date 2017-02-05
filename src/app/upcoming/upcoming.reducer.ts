import { UpcomingActions } from './upcoming.actions';
import { IPayloadAction } from '../utils/payload-action';

interface IUpcomingState {
  items: Array<any>;
  isFetching: Boolean;
  error: Object;
}

const defaultState: IUpcomingState = {
  items: [],
  isFetching: false,
  error: null
};

export function upcomingReducer(state = defaultState, action: IPayloadAction) {
  switch (action.type) {
    case UpcomingActions.LOAD_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case UpcomingActions.LOAD_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        error: null,
        isFetching: false
      };
    case UpcomingActions.LOAD_FAILED:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
  }

  return state;
}
