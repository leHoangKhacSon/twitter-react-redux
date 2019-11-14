import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';
import * as whoToFollowActions from '../../actions/WhoToFollow';

function WhoToFollow({ whoToFollow, fetchDataFollowMore }) {
  const { title, items, limit } = whoToFollow;
  return (
    <div className="follow">
      <div className="follow-header">
        <p className="follow-header-title">
          {title}
        </p>
      </div>
      {items.slice(0, limit).map(({ avatarUrl, name, username, tick }) => (
        <div className="follow-item" key={uuid()}>
          <div className="follow-item-avatar">
            <div className="follow-item-avatar-hover">
            </div>
          </div>
          <a href="#" className="follow-item-info">
            <p className="follow-item-info-name">
              {name}
            </p>
            <p className="follow-item-info-mail">
              {username}
            </p>
          </a>
          <div className="follow-item-btn">
            <p className="follow-item-btn-text">
              Follow
            </p>
          </div>
        </div>
      ))}

      <div className="follow-more">
        <a className="follow-more-text" onClick={fetchDataFollowMore}>
          Show more
        </a>
      </div>
    </div>
  )
}

WhoToFollow.propTypes = {
  whoToFollow: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        username: PropTypes.string,
        tick: PropTypes.bool
      })
    ),
    limit: PropTypes.number
  }),
  fetchDataFollowMore: PropTypes.func
}

const mapStateToProps = state => {
  return {
    whoToFollow: state.whoToFollow
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataFollowMore: () => {
      dispatch(whoToFollowActions.fetchDataFollowMore())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollow);
