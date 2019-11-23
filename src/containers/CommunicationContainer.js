import { connect } from 'react-redux';

import Communication from '../components/Communication';

const mapStateToProps = state => {
  return {
    communication: state.communication
  }
}

export default connect(mapStateToProps)(Communication);
