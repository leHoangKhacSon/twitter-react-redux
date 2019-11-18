import React from 'react';
import { connect } from 'react-redux';

import WhoToFollow from '../components/WhoToFollow';
import * as whoToFollowActions from '../actions/WhoToFollow';

function WhoToFollowContainer({ whoToFollow, fetchDataFollow, fetchDataFollowMore, showCard, hideCard, onFollow }) {
  return (
    <WhoToFollow 
      whoToFollow={whoToFollow}
      fetchDataFollow={fetchDataFollow}
      fetchDataFollowMore={fetchDataFollowMore}
      showCard={showCard}
      hideCard={hideCard}
      onFollow={onFollow}
    />
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollowContainer);
