import { SwipeableDrawer } from '@material-ui/core';
import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      <h1>..LIFE IS AWESOME... </h1>
    <Header/>
    <TinderCards />
    <SwipeButton/>
    {/* TinderCard */}
    {/* Swipe Button */}
    </div>
  );
}

export default App;
