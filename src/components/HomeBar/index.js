import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './style.scss';

function HomeBar({ homeBar }) {
  const { homebarName, homebarIcon } = homeBar;
  return (
  <div class="home-bar">
    <p class="home-bar-text">
      {homebarName}
    </p>
    <i class={homebarIcon}>
      <div class="home-bar-icon-hover"></div>
    </i>
  </div>
  )
}

HomeBar.propTypes = {
  homeBar: PropTypes.shape({
    homebarName: PropTypes.string,
    homebarIcon: PropTypes.string
  })
}

const mapStateToProps = state => {
  return {
    homeBar: state.homeBar
  }
}

export default connect(mapStateToProps)(HomeBar);
