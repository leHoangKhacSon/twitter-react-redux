import React from 'react';

import './App.scss';
import WhoToFollowContainer from './containers/WhoToFollowContainer';
import TrendingContainer from './containers/TrendingContainer';
import TimeLineContainer from './containers/TimeLineContainer';
import SearchContainer from './containers/SearchContainer';
import PostFormContainer from './containers/PostFormContainer';
import MenuContainer from './containers/MenuContainer';
import HomeBarContainer from './containers/HomeBarContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="left-siderbar">
        <MenuContainer />
      </div>
      <div className="content">
        <HomeBarContainer />
        <PostFormContainer />
        <TimeLineContainer />
      </div>
      <div className="right-siderbar">
        <SearchContainer />
        <TrendingContainer />
        <WhoToFollowContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
