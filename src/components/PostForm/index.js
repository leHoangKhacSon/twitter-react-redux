import React, {useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';
import * as postFormActions from '../../actions/PostForm';

function PostForm({ postForm, onEnterValue }) {
  const { isActive } = postForm;
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
              placeholder="What's going on?" 
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

const mapStateToProps = state => {
  return {
    postForm: state.postForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onEnterValue: value => {
      dispatch(postFormActions.onEnterValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
