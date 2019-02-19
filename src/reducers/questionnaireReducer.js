import * as actions from '../actions/questionnaireActions';

export default (state = {}, action) => {

  switch (action.type) {
    case actions.QUESTIONNAIRE_LIST_LOADED:
      return {
        ...state,
        questionnaireList: action.payload
      };

    case actions.QUESTIONNAIRE_LIST_FILTER:
      return {
        ...state,
        questionnaireList: action.payload
      };
    case actions.QUESTIONNAIRE_LOADED:
      return {
        ...state,
        current: action.payload,
        validationErrors: [],
        resourceBin: action.payload.contained || []
      };

    case actions.FETCH_RESOURCE:
      if (action.error) {
        return {
          ...state,
          error: action.payload
        };
      }
      else {
        return {
          ...state,
          resourceBin: state.resourceBin.concat(action.payload)
        };
      }
  }

  return state;
};
