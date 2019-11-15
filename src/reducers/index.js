import { combineReducers } from 'redux';

import trending from './trending';
import search from './search';
import whoToFollow from './whoToFollow';
import menu from './menu';

const Reducer = combineReducers({
  trending, 
  search,
  whoToFollow,
  menu
});

export default Reducer;