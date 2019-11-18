import React from 'react';
import { connect } from 'react-redux';

import * as postFormActions from '../actions/PostForm';
import PostForm from '../components/PostForm';

function PostFormContainer({ postForm, onEnterValue }) {
  return (
    <PostForm 
      postForm={postForm}
      onEnterValue={onEnterValue}
    />
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);