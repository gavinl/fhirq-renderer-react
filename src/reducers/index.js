import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import async from './asyncReducer';
import server from './serverReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  async,
  server
});

export default rootReducer;
