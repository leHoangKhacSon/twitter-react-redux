import React from 'react';
import { connect } from 'react-redux';

import * as trendingActions from '../actions/Trending';
import Trending from '../components/Trending';

function TrendingContainer({ trending, fetchDataTrending, fetchDataTrendingMore }) {
  return (
    <Trending 
      trending={trending}
      fetchDataTrending={fetchDataTrending}
      fetchDataTrendingMore={fetchDataTrendingMore}
    />
  )
}

const mapStateToProps = state => {
  return {
    trending: state.trending
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataTrendingMore: () => {
      dispatch(trendingActions.fetchDataTrendingMore())
    },
    fetchDataTrending: () => {
      dispatch(trendingActions.fetchDataTrending())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);