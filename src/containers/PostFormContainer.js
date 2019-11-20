import { connect } from 'react-redux';

import * as postFormActions from '../actions/PostForm';
import PostForm from '../components/PostForm';

const mapStateToProps = state => {
  return {
    postForm: state.postForm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnterValue: value => {
      dispatch(postFormActions.onEnterValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);