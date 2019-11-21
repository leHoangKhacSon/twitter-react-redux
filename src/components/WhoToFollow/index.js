import React, { useEffect } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InfoCard from '../../helpers/InfoCard';

function WhoToFollow({ whoToFollow, fetchDataFollowMore, showCard, hideCard, onFollow, fetchDataFollow, onHoverUnfollow }) {
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
            <div 
              className={classNames('follow-item-btn', 'btn-active', {
                'btn-unfollow': item.isUnfollow,
              })} 
              onClick={() => onFollow(item)}
              onMouseEnter={() => onHoverUnfollow(item)}
              onMouseLeave={() => onHoverUnfollow(item)}
            >
              <p className={classNames("follow-item-btn-text", {
                'follow-item-btn-text-hidden': item.isUnfollow  
              })}>
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

export default WhoToFollow;
