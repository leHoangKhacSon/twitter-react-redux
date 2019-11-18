import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import autosize from 'autosize';

function PostForm({ postForm, onEnterValue }) {
  const { isActive } = postForm;

  useEffect(() => {
    const ta = document.querySelector('textarea');
    autosize(ta);
  });

  return (
    <div className="post">
        <div className="post-avatar">
          <div className="post-avatar-img">
          </div>
        </div>
        <div className="post-form">
          <div className="post-form-main">
            <textarea 
              rows='1' 
              placeholder="What's happening?" 
              onChange={(event) => onEnterValue(event.target.value)}
            >
            </textarea>
          </div>
          <div className="post-form-footer">
            <div className="add">
              <i className="add-icon fas fa-camera-retro">
                <div className="add-icon-hover"></div>
              </i>
              <i className="add-icon fab fa-github">
                <div className="add-icon-hover"></div>
              </i>
              <i className="add-icon far fa-chart-bar">
                <div className="add-icon-hover"></div>
              </i>
              <i className="add-icon far fa-smile">
                <div className="add-icon-hover"></div>
              </i>
            </div>
            <div className={classNames('add-action', {
              'input-change': isActive
            })}>
              <i className="add-action-load far fa-circle"></i>
              <i className="add-action-vertical-line fas fa-grip-lines-vertical"></i>
              <i className="add-action-plus fas fa-plus-circle"></i>
              <div className="add-action-tweet">
                <span>Tweet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

PostForm.propTypes = {
  PostForm: PropTypes.shape({
    isActive: PropTypes.bool
  }),
  onEnterValue: PropTypes.func
}

export default PostForm;
