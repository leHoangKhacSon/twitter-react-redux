import { connect } from 'react-redux';

import * as searchActions from '../actions/Search';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    isShow: state.search
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFocusForm: () => {
      dispatch(searchActions.onFocusForm())
    },
    onLeaveForm: () => {
      dispatch(searchActions.onLeaveForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);


