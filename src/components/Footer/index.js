import React from 'react';

import './style.scss';

function Footer() {
  return (
    <div className="line">
      <div className="line-1">
        <span className="line-1-item">
          <a href="$" className="line-1-item-text">
            Terms
          </a>
        </span>
        <span className="line-1-item">
          <a href="$" className="line-1-item-text">
            Privacy policy
          </a>
        </span>
        <span className="line-1-item">
          <a href="$" className="line-1-item-text">
            Cookies
          </a>
        </span>
        <span className="line-2-item">
          <a href="#" className="line-2-item-text">
            Ads info
            <i className="line-2-item-icon fas fa-caret-down"></i>
          </a>
        </span>
      </div>
      <div className="line-2">
        <span className="line-2-item">
          <a href="#" className="line-2-item-text">
            More
          </a>
        </span>
        <span className="inc">
          2019 Twitter, inc.
        </span>
      </div>
    </div>
  )
}

export default Footer;
