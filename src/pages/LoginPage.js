import React from 'react';

import './login.scss';

function LoginPage() {
  return (
    <div className="login">
      <div className="login-icon">
        <i className="fab fa-twitter fa-2x"></i>
      </div>
      <p className="login-title">Log in to Twitter</p>
      <form className="login-form">
        <div className="login-form-input">
          <div className="label">
            <span className='label-title'>Phone, email, or username</span>
            <input type="text" className="label-input"></input>
          </div>
        </div>
        <div className="login-form-input">
          <div className="label">
            <span className='label-title'>Password</span>
            <input type="password" className="label-input"></input>
          </div>
        </div>
        <div className="login-form-button">
          <div className="button-content">
            <span className="button-content-text">Log in</span>
          </div>
        </div>
      </form>
      <div className="login-footer">
        <div className="login-footer-content">
          <a href="#" className="login-footer-content-link">Forgot password?</a>
        </div>
        <span className="login-footer-dot">.</span>
        <div className="login-footer-content">
          <a href="#" className="login-footer-content-link">Sign up for Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
