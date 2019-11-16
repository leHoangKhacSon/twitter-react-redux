import * as trendingTypes from '../constants/Trending'

const initialState = {
  title: 'Trends for you',
  items: [],
  limit: 5
};


const trending = (state = initialState, action) => {
  switch(action.type) {
    case trendingTypes.FETCH_DATA_TRENDING: {
      return {
        ...state
      };
    }
    case trendingTypes.FETCH_DATA_TRENDING_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          ...data
        ]
      }
    }
    case trendingTypes.FETCH_DATA_TRENDING_FAIL: {
      return {
        ...state,
        items: []
      }
    }
    case trendingTypes.FETCH_DATA_TRENDING_MORE: {
      return {
        ...state,
        limit: state.limit + 5
      }
    }
    default:
      return state;
  }
}

export default trending;

