import React from 'react';

import './style.scss';

function HomeBar() {
  return (
  <div class="home-bar">
    <p class="home-bar-text">
      Home
    </p>
    <i class="home-bar-icon fab fa-jedi-order">
      <div class="home-bar-icon-hover"></div>
    </i>
  </div>
  )
}

export default HomeBar;
