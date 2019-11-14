import React from 'react';

import './App.scss';
import Trending from './components/Trending';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div className="right-siderbar">
        <Search />
        <Trending />
      </div>
    </div>
  );
}

export default App;
