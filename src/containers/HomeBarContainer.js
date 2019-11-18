import React from 'react';
import { connect } from 'react-redux';

import HomeBar from '../components/HomeBar';

function HomeBarContainer({ homeBar }) {
  return (
    <HomeBar homeBar={homeBar} />
  )
}

const mapStateToProps = state => {
  return {
    homeBar: state.homeBar
  }
}

export default connect(mapStateToProps)(HomeBarContainer);
