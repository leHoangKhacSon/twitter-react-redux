import React from 'react';
import PropTypes from 'prop-types';

function HomeBar({ homeBar }) {
  const { homebarName, homebarIcon } = homeBar;
  return (
  <div className="home-bar">
    <p className="home-bar-text">
      {homebarName}
    </p>
    <i className={homebarIcon}>
      <div className="home-bar-icon-hover"></div>
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

export default HomeBar;
