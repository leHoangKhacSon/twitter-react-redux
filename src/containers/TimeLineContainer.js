import React from 'react';
import { connect } from 'react-redux';

import * as timeLineActions from '../actions/TimeLine';
import TimeLine from '../components/TimeLine';

function TimeLineContainer({ timeLine, fetchDataTimeLine, onLikeClick, showInfoCard, hideInfoCard }) {
  return (
    <TimeLine 
      timeLine={timeLine}
      fetchDataTimeLine={fetchDataTimeLine}
      onLikeClick={onLikeClick}
      showInfoCard={showInfoCard}
      hideInfoCard={hideInfoCard}
    />
  )
}

const mapStateToProps = state => {
  return {
    timeLine: state.timeLine
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDataTimeLine: () => {
      dispatch(timeLineActions.fetchDataTimeLine())
    },
    onLikeClick: item => {
      dispatch(timeLineActions.onLikeClick(item))
    },
    showInfoCard: item => {
      dispatch(timeLineActions.showInfoCard(item))
    },
    hideInfoCard: item => {
      dispatch(timeLineActions.hideInfoCard(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineContainer);
