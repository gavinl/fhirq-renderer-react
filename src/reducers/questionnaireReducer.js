import * as actions from '../actions/questionnaireActions';
import { findItem } from '../components/common/fhir/itemUtils';

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

    case actions.QUESTIONNAIRE_SET_ANSWER:
      return {
        ...state,
        current: replaceQuestion(state.current, action.linkId, action.answer)
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

/// eslint-disable-once no-unused-vars
const replaceQuestion = (questionnaire, linkId, answer) => {
  console.log(JSON.stringify(answer));
  debugger;
};
