import { connect } from 'react-redux';

import WhoToFollow from '../components/WhoToFollow';
import * as whoToFollowActions from '../actions/WhoToFollow';

const mapStateToProps = state => {
  return {
    whoToFollow: state.whoToFollow
  };
};

const mapDispatchToProps = dispatch => {
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

export default connect(mapStateToProps, mapDispatchToProps)(WhoToFollow);
