import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import './style.scss';
import * as timeLineActions from '../../actions/TimeLine';

function TimeLine({ timeLine, onLike, onDislike }) {
  return (
    <div class="timeline">
      { timeLine.map(item => (
        <div class="timeline-item">
        <div class="timeline-item-avatar">
          <div class="avatar-img">
            <div class="avatar-img-hover"></div>
          </div>
        </div>
        <div class="timeline-item-content">
          <div class="timeline-item-content-header">
            <a href="#" class="post-author">
              <strong class="post-author-name">
                {item.name}
              </strong>
              <i class="post-author-tick fas fa-crown"></i>
              <span class="post-author-trend">
                {item.username}
              </span>
            </a>
            <a href="" class="post-time">
              {item.time}
            </a>
            <div id="option" class="dropdown-btn"> 
              <i class="dropdown-btn-icon fas fa-caret-down">
                <div class="dropdown-btn-icon-overlay"></div>
              </i>
              <button></button>
            </div>
          </div>
          <div class="timeline-item-content-main">
            <div class="description">
              {item.contentText}
            </div>
            <div class="sub-description">

            </div>
          </div>
          <div class="timeline-item-content-footer">
          <div class="social">
            <i class="social-icon far fa-comment">
              <div class="social-icon-hover"></div>
            </i>
            <span class="social-view">{item.comment}</span>
          </div>
          <div class="social">
            <i class="social-icon fas fa-retweet">
              <div class="social-icon-hover"></div>
            </i>
            <span class="social-view">{item.reTweet}</span>
          </div>
          <div class="social">
            <i class="social-icon far fa-heart">
              <div class="social-icon-hover"></div>
            </i>
            <span class="social-view">{item.like}</span>
          </div>
          <div class="social">
            <i class="social-icon fas fa-external-link-alt">
              <div class="social-icon-hover"></div>
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
  onDislike: PropTypes.func
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
