import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import async from './asyncReducer';
import server from './serverReducer';
import questionnaire from './questionnaireReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  async,
  server,
  questionnaire
});

export default rootReducer;
