import React from 'react';

import './App.scss';
import Trending from './components/Trending';
import Search from './components/Search';
import WhoToFollow from './components/WhoToFollow';

function App() {
  return (
    <div className="App">
      <div className="right-siderbar">
        <Search />
        <Trending />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default App;
