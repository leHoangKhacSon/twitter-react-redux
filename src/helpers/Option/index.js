import React from 'react';

function Option() {
  return (
    <ul className="option">
      <li className="option-item">
        <i className="option-item-icon far fa-frown"></i>
        <span className="option-item-text">
          Show less often
        </span>
      </li>
      <li className="option-item">
        <i className="option-item-icon fas fa-code"></i> <span className="option-item-text">
          Ember Tweet
        </span>
      </li>
      <li className="option-item">
        <i className="option-item-icon fas fa-user-plus"></i>
        <span className="option-item-text">
          Follow @name
        </span>
      </li>
      <li className="option-item">
        <i className="option-item-icon fas fa-microphone-alt-slash"></i> 
        <span className="option-item-text">
          Mute @name
        </span>
      </li>
      <li className="option-item">
        <i className="option-item-icon fas fa-ban"></i> <span className="option-item-text">
          Block @name
        </span>
      </li>
    </ul>
  )
}

export default Option;
