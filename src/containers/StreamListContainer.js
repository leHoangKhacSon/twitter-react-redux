import { connect } from 'react-redux';

import StreamList from '../components/StreamList';

const mapStateToProps = state => {
  return {
    streamList: state.streamList
  }
}

export default connect(mapStateToProps)(StreamList);