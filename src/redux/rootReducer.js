import { combineReducers } from 'redux';

import { articleReducer } from './articles';

export default combineReducers({
  articles: articleReducer,
});
