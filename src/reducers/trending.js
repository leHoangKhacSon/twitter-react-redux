import * as trendingTypes from '../constants/Trending'

const initialState = {
  title: 'Xu hướng của bạn',
  items: [
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    },
    {
      trend: 'VietNam',
      hashtag: 'VietName',
      tweetCount: 1395
    }
  ],
  limit: 5
};


const trending = (state = initialState, action) => {
  switch(action.type) {
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

