import React from 'react';

import './signup.scss';

function SignupPage() {
  return (
    <div className="signup">
      <div className="signup-header">
        <div className="signup-header-wrapper">
          <div className="signup-header-left"></div>
          <div className="signup-header-center">
            <i className="fab fa-twitter fa-2x"></i>
          </div>
          <div className="signup-header-right">
            <div className="signup-header-right-button">
              <span className="signup-header-right-button-text">Next</span>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-content">
        <div className="signup-form">
          <div className="signup-form-title">
            <span className="signup-form-title-text">Create your account</span>
          </div>
          <div className="signup-form-input">
            <div className="label">
              <span className='label-title'>Name</span>
              <input type="text" className="label-input"></input>
            </div>
            <div className="check">
              <span className="check-count">0/50</span>
            </div>
          </div>
          <div className="signup-form-input">
            <div className="label">
              <span className='label-title'>Phone</span>
              <input type="text" className="label-input"></input>
            </div>
          </div>
          <div className="signup-form-option">
            <span className="signup-form-option-text">Use email</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;
