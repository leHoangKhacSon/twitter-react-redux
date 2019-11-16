import React, { useEffect } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as whoToFollowActions from '../../actions/WhoToFollow';
import InfoCard from '../../helpers/InfoCard';

function WhoToFollow({ whoToFollow, fetchDataFollowMore, showCard, hideCard, onFollow, fetchDataFollow }) {
  const { title, items, limit } = whoToFollow;

  useEffect(() => {
    fetchDataFollow();
  }, [fetchDataFollow])

  return (
    <div className="follow">
      <div className="follow-header">
        <p className="follow-header-title">
          {title}
        </p>
      </div>
      {items.slice(0, limit).map(item => (
        <div className="follow-item" key={uuid()}>
          <div 
            className="follow-item-avatar" 
            onMouseEnter={() => showCard(item)}
            onMouseLeave={() => hideCard(item)}
            style={
              {
                backgroundImage: `url(${item.avatarUrl})`
              }
            }
          >
            <div className="follow-item-avatar-hover">
            </div>
            {item.isShowCard && <InfoCard />}
          </div>


          <a href="/" className="follow-item-info">
            <p className="follow-item-info-name">
              {item.name}
            </p>
            <p className="follow-item-info-mail">
              {item.username}
            </p>
          </a>
          {item.isFollow === false && 
            <div className="follow-item-btn" onClick={() => onFollow(item)}>
              <p className="follow-item-btn-text">
                Follow
              </p>
            </div>
          }
          {item.isFollow && 
            <div className="follow-item-btn btn-active" onClick={() => onFollow(item)}>
              <p className="follow-item-btn-text">
                Following
              </p>
            </div>
          }

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
        id: PropTypes.number,
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        username: PropTypes.string,
        tick: PropTypes.bool,
        isFollow: PropTypes.bool
      })
    ),
    limit: PropTypes.number
  }),
  fetchDataFollowMore: PropTypes.func,
  showCard: PropTypes.func,
  hideCard: PropTypes.func,
  fetchDataFollow: PropTypes.func
}

const mapStateToProps = state => {
  return {
    whoToFollow: state.whoToFollow
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataFollow: () => {
      dispatch(whoToFollowActions.fetchDataFollow())
    },
    fetchDataFollowMore: () => {
      dispatch(whoToFollowActions.fetchDataFollowMore())
    },
    showCard: item => {
      dispatch(whoToFollowActions.showCard(item))
    },
    hideCard: item => {
      dispatch(whoToFollowActions.hideCard(item))
    },
    onFollow: item => {
      dispatch(whoToFollowActions.onFollow(item))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollow);
