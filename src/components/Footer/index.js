import React from 'react';

import './style.scss';

function Footer() {
  return (
    <div class="line">
      <div class="line-1">
        <span class="line-1-item">
          <a href="$" class="line-1-item-text">
            Terms
          </a>
        </span>
        <span class="line-1-item">
          <a href="$" class="line-1-item-text">
            Privacy policy
          </a>
        </span>
        <span class="line-1-item">
          <a href="$" class="line-1-item-text">
            Cookies
          </a>
        </span>
        <span class="line-2-item">
          <a href="#" class="line-2-item-text">
            Ads info
            <i class="line-2-item-icon fas fa-caret-down"></i>
          </a>
        </span>
      </div>
      <div class="line-2">
        <span class="line-2-item">
          <a href="#" class="line-2-item-text">
            More
          </a>
        </span>
        <span class="inc">
          2019 Twitter, inc.
        </span>
      </div>
    </div>
  )
}

export default Footer;
