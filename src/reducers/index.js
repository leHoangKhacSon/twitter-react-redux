import { combineReducers } from 'redux';

import trending from './trending';
import search from './search';
import whoToFollow from './whoToFollow';
import menu from './menu';
import homeBar from './homeBar';
import postForm from './postForm';
import timeLine from './timeLine';

const Reducer = combineReducers({
  trending, 
  search,
  whoToFollow,
  menu,
  homeBar,
  postForm,
  timeLine
});

export default Reducer;