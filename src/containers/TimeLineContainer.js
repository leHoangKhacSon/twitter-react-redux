import { connect } from 'react-redux';

import * as timeLineActions from '../actions/TimeLine';
import TimeLine from '../components/TimeLine';


const mapStateToProps = state => {
  return {
    timeLine: state.timeLine
  }
};

const mapDispatchToProps = dispatch => {
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);
