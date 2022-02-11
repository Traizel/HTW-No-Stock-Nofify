import { combineReducers } from 'redux';
import item from './itemReducer';
import redirect from './redirectReducer';

const rootReducer = combineReducers({
  item,
  redirect,
});

export default rootReducer;
