import { ASYNC_START, ASYNC_END } from '../actions/asyncActions';

export default (state = {}, action) => {
  const callsInProgress = state.ajaxCallsInProgress || 0;
  switch (action.type) {
    case ASYNC_START:
      return {
        ...state,
        ajaxCallsInProgress: callsInProgress + 1
      };
    case ASYNC_END:
      return {
        ...state,
        ajaxCallsInProgress: callsInProgress - 1
      };
  }

  return state;
};

