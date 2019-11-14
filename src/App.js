import React, { useState } from 'react';

import './App.scss';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
      <div className="right-siderbar">
        <Trending />
      </div>
    </div>
  );
}

export default App;
