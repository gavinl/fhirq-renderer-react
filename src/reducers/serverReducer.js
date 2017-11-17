import * as actions from '../actions/serverActions';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.SERVER_PAGE_LOADED:
      return {
        ...state,
        conformance: action.payload
      };
  }

  return state;
};
