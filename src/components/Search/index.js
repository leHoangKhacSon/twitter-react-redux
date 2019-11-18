import React from 'react';
import PropTypes from 'prop-types';

function Search({ isShow, onFocusForm, onLeaveForm }) {
  return (
    <div className="search">
      <div className="search-form">
        <input 
          type="text" 
          id="search-form-input"
          className="search-form-input" 
          placeholder="Tìm kiếm Twitter" 
          onFocus={onFocusForm}
          onBlur={onLeaveForm}
        />
        { isShow.isShow === true ? (<div className="search-form-input-support">
          <p className="text-support">
            Try searching for people, topics, or keywords
          </p>
        </div>)
        : ''
        }
        <i className="search-form-icon fas fa-search"></i>
      </div>
    </div>
  )
}

Search.propTypes = {
  isShow: PropTypes.object,
  onFocusForm: PropTypes.func,
  onLeaveForm: PropTypes.func
}

export default Search;
