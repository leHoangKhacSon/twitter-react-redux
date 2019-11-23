import React from 'react';
import PropTypes from 'prop-types';

function StreamList({ streamList }) {
  const leng = streamList.length();
  return (
    <ul className="stream-footer-list">
      {streamList.slice(0, leng - 1).map((item, index) => (
        <li key={index} className="stream-footer-item">
          <a href="#">
            {item}
          </a>
        </li>
      ))}
      <li className="stream-footer-item">
        <span>
          {streamList[leng - 1]}
        </span>
      </li>
    </ul>
  )
}

StreamList.propTypes = {
  streamList: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default StreamList;
