import React from 'react'

import './logout.scss';
import CommunicationContainer from '../containers/CommunicationContainer';
import StreamListContainer from '../containers/StreamListContainer';
import SignupBlockContainer from '../containers/SignupBlockContainer';

function LogoutPage() {
  return (
    <div className="login-page">
      <div className="login-page-content">
        <div className="left">
          <CommunicationContainer />
        </div>
        <div className="right">
          <SignupBlockContainer />
        </div>
      </div>
      <div className="stream-footer">
        <StreamListContainer />
      </div>
    </div>
  )
}

export default LogoutPage;
