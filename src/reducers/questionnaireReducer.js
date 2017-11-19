import * as actions from '../actions/questionnaireActions';

export default (state = {}, action) => {

  switch (action.type) {
    case actions.QUESTIONNAIRE_PAGE_LOADED:
      return {
        ...state,
        questionnaireList: action.payload
      };
  }

  return state;
};
