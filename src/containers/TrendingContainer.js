import { connect } from 'react-redux';

import * as trendingActions from '../actions/Trending';
import Trending from '../components/Trending';

const mapStateToProps = state => {
  return {
    trending: state.trending
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataTrendingMore: () => {
      dispatch(trendingActions.fetchDataTrendingMore())
    },
    fetchDataTrending: () => {
      dispatch(trendingActions.fetchDataTrending())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);