import React from 'react';
import PropTypes from 'prop-types';

function Communication({communication}) {
  const communications = Object.values(communication);
  return (
    <div className="communication-content">
      {communications.map((item, index) => (
        <div key={index} className="communication-item">
          <i className={item.icon}></i>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  )
}

Communication.propTypes = {
  communication: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default Communication;
