import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Navbar from './navbar';
import VideoLogo from './video-logo';
import Cards from './cards';
import Reviews from './reviews';
import Bottom from './bottom';

import './App.css';

function cart(state = [], action) {
  if (action.type === 'ADD_ITEM') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'REMOVE_ITEM') {
    state.splice(action.index, 1);
    return [
      ...state
    ];
  } else if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
}

const store = createStore(cart, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Navbar />
          <VideoLogo />
          
          <Cards />
          <Reviews />

          <Bottom />

          <ToastContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
