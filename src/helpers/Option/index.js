import React from 'react';

function Option() {
  return (
    <ul class="option">
      <li class="option-item">
        <i class="option-item-icon far fa-frown"></i>
        <span class="option-item-text">
          Show less often
        </span>
      </li>
      <li class="option-item">
        <i class="option-item-icon fas fa-code"></i> <span class="option-item-text">
          Ember Tweet
        </span>
      </li>
      <li class="option-item">
        <i class="option-item-icon fas fa-user-plus"></i>
        <span class="option-item-text">
          Follow @name
        </span>
      </li>
      <li class="option-item">
        <i class="option-item-icon fas fa-microphone-alt-slash"></i> 
        <span class="option-item-text">
          Mute @name
        </span>
      </li>
      <li class="option-item">
        <i class="option-item-icon fas fa-ban"></i> <span class="option-item-text">
          Block @name
        </span>
      </li>
    </ul>
  )
}

export default Option;
