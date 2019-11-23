import React from 'react';
import PropTypes from 'prop-types';

function SignupBlock({ signupBlock }) {
  return (
    <div className="signup-block">
      <div className="signup-header">
        <i className="fab fa-twitter fa-2x signup-header-icon"></i>
        <a className="login-button">Login</a>
      </div>
      <div className="signup-title">
        <h1>{signupBlock.title}</h1>
      </div>
      <div className="signup-form">
        <p className="signup-form-title">{signupBlock.subTitle}</p>
        <div className="signup-form-buttons">
          <a className="button-signup">Signup</a>
          <a className="button-login">Login</a>
        </div>
      </div>
    </div>
  )
}

SignupBlock.propTypes = {
  signupBlock: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string
  })
}

export default SignupBlock
