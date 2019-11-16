import * as trendingTypes from '../constants/Trending';

export const fetchDataTrending = () => {
  return {
    type: trendingTypes.FETCH_DATA_TRENDING
  }
};

export const fetchDataTrendingSuccess = data => {
  return {
    type: trendingTypes.FETCH_DATA_TRENDING_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchDataTrendingFail = () => {
  return {
    type: trendingTypes.FETCH_DATA_TRENDING_FAIL
  };
};

export const fetchDataTrendingMore = () => {
  return {
    type: trendingTypes.FETCH_DATA_TRENDING_MORE
  }
};

