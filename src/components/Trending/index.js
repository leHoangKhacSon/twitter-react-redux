import React from 'react'
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';
import * as trendingActions from '../../actions/Trending';

function Trending({ trending, fetchDataTrendingMore }) {
  const { title, items, limit } = trending;
  return (
    <div className="trend">
      <div className="trend-header">
        <p className="trend-header-title">
          {title}
        </p>
        <i className="trend-header-setting fas fa-cog">
          <div className="trend-header-setting-hover"></div>
        </i>
      </div>
      {items.slice(0, limit).map(({trend, hashtag, tweetCount}) => {
        return (
          <div className="trend-item" key={uuid()}>
            <p className="trend-item-text">
              {trend}
            </p>
            <p className="trend-item-hashtag">
              {hashtag}
            </p>
            <p className="trend-item-view">
              {tweetCount.toLocaleString()} <span>Tweets</span>
            </p>
          </div>
        )
      })}
      <div className="trend-more" 
      onClick={fetchDataTrendingMore}
      >
        <a className="trend-more-text">
          Show more
        </a>
      </div>
    </div>
  )
}

Trending.propTypes = {
  trending: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        trend: PropTypes.string.isRequired,
        hashtag: PropTypes.string.isRequired,
        tweetCount: PropTypes.number.isRequired
      })
    ).isRequired,
    limit: PropTypes.number.isRequired
  }).isRequired,
  fetchDataTrendingMore: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    trending: state.trending
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataTrendingMore: () => {
      dispatch(trendingActions.fetchDataTrendingMore());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending); 
