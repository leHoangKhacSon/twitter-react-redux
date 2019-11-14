import { combineReducers } from 'redux';

import trending from './trending';
import search from './search';
import whoToFollow from './whoToFollow';

const Reducer = combineReducers({
  trending, 
  search,
  whoToFollow
});

export default Reducer;