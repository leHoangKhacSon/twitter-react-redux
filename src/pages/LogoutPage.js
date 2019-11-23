import React from 'react'

import './logout.scss';
import CommunicationContainer from '../containers/CommunicationContainer';

function LogoutPage() {
  return (
    <div className="login-page">
      <div className="login-page-content">
        <div className="left">
          <CommunicationContainer />
        </div>
        <div className="right">
          <div className="signup-block">
            <div className="signup-header">
              <i className="fab fa-twitter fa-2x signup-header-icon"></i>
              <a className="login-button">Login</a>
            </div>
            <div className="signup-title">
              <h1>See what's happening in the world right now</h1>
            </div>
            <div className="signup-form">
              <p className="signup-form-title">Join twitter today</p>
              <div className="signup-form-buttons">
                <a className="button-signup">Signup</a>
                <a className="button-login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stream-footer">
        <ul className="stream-footer-list">
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <a href="#">
              Introduce
            </a>
          </li>
          <li className="stream-footer-item">
            <span>
              2019 Twitter
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LogoutPage;
