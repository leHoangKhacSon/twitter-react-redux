import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as timeLineActions from '../../actions/TimeLine';
import InfoCard from '../../helpers/InfoCard';

function TimeLine({ timeLine, onLike, onDislike, showInfoCard, hideInfoCard }) {
  return (
    <div className="timeline">
      { timeLine.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-item-avatar">
            <div 
            className="avatar-img" 
            onMouseEnter={() => showInfoCard(item)} 
            onMouseLeave={() => hideInfoCard(item)}>
              <div className="avatar-img-hover"></div>
              { item.infoCardShow && <InfoCard /> }
            </div>
          </div>
          <div className="timeline-item-content">
            <div className="timeline-item-content-header">
              <a 
              href="/" 
              className="post-author" 
              onMouseEnter={() => showInfoCard(item)}
              onMouseLeave={() => hideInfoCard(item)}>
                <strong className="post-author-name">
                  {item.name}
                </strong>
                <i className="post-author-tick fas fa-crown"></i>
                <span className="post-author-trend">
                  {item.username}
                </span>
                {/* <InfoCard /> */}
              </a>
              <a href="/" className="post-time">
                {item.time}
              </a>
              <div id="option" className="dropdown-btn"> 
                <i className="dropdown-btn-icon fas fa-caret-down">
                  <div className="dropdown-btn-icon-overlay"></div>
                </i>
                <button></button>
              </div>
            </div>
            <div className="timeline-item-content-main">
              <div className="description">
                {item.contentText}
              </div>
              <div className="sub-description">

              </div>
            </div>
            <div className="timeline-item-content-footer">
            <div className="social">
              <i className="social-icon far fa-comment">
                <div className="social-icon-hover"></div>
              </i>
              <span className="social-view">{item.comment}</span>
            </div>
            <div className="social">
              <i className="social-icon fas fa-retweet">
                <div className="social-icon-hover"></div>
              </i>
              <span className="social-view">{item.reTweet}</span>
            </div>
            <div className="social">
              <i className="social-icon far fa-heart">
                <div className="social-icon-hover"></div>
              </i>
              <span className="social-view">{item.like}</span>
            </div>
            <div className="social">
              <i className="social-icon fas fa-external-link-alt">
                <div className="social-icon-hover"></div>
              </i>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  )
}

TimeLine.propTypes = {
  timeLine: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatarUrl: PropTypes.string,
      isTick: PropTypes.bool,
      name: PropTypes.string,
      username: PropTypes.string,
      time: PropTypes.string,
      contentText: PropTypes.string,
      contentImg: PropTypes.string,
      comment: PropTypes.number,
      reTweet: PropTypes.number,
      like: PropTypes.number,
      idLike: PropTypes.bool
    })
  ),
  onLike: PropTypes.func,
  onDislike: PropTypes.func,
  showInfoCard: PropTypes.func,
  hideInfoCard: PropTypes.func
}

const mapStateToProps = state => {
  return {
    timeLine: state.timeLine
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLike: idPost => {
      dispatch(timeLineActions.onLike(idPost))
    },
    onDisLike: idPost => {
      dispatch(timeLineActions.onDislike(idPost))
    },
    showInfoCard: idPost => {
      dispatch(timeLineActions.showInfoCard(idPost))
    },
    hideInfoCard: idPost => {
      dispatch(timeLineActions.hideInfoCard(idPost))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
