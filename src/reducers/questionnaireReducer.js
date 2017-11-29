import * as actions from '../actions/questionnaireActions';

export default (state = {}, action) => {

  switch (action.type) {
    case actions.QUESTIONNAIRE_LIST_LOADED:
      return {
        ...state,
        questionnaireList: action.payload
      };

    case actions.QUESTIONNAIRE_LOADED:
      return {
        ...state,
        current: action.payload,
        resourceBin: action.payload.contained || []
      };

      case actions.FETCH_RESOURCE:
      return {
        ...state,
        resourceBin: state.resourceBin.push(action.payload)
      };
  }

  return state;
};
