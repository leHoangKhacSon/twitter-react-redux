import { connect } from 'react-redux';

import HomeBar from '../components/HomeBar';

const mapStateToProps = state => {
  return {
    homeBar: state.homeBar
  }
}

export default connect(mapStateToProps)(HomeBar);
