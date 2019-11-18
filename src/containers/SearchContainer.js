import React from 'react';
import { connect } from 'react-redux';

import * as searchActions from '../actions/Search';
import Search from '../components/Search';

function SearchContainer({ isShow, onFocusForm, onLeaveForm }) {
  return (
    <Search 
    isShow={isShow}
    onFocusForm={onFocusForm}
    onLeaveForm={onLeaveForm}
    />
  )
}

const mapStateToProps = state => {
  return {
    isShow: state.search
  }
};

const mapDispatchToProps = (dispatch, prosp) => {
  return {
    onFocusForm: () => {
      dispatch(searchActions.onFocusForm())
    },
    onLeaveForm: () => {
      dispatch(searchActions.onLeaveForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);


