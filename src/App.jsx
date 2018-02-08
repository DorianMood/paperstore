import React, { Component } from 'react';

import Navbar from './navbar';
import VideoLogo from './video-logo';
import Cards from './cards';
import Reviews from './reviews';
import Bottom from './bottom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <VideoLogo />
        
        <Cards />
        <Reviews />

        <Bottom />
      </div>
    );
  }
}

export default App;
