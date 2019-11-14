import { combineReducers } from 'redux';

import trending from './trending';
import search from './search';

const Reducer = combineReducers({
  trending, 
  search
});

export default Reducer;