import React, { Component } from 'react';
import GameContainer from './components/Game';
import StarsContainer from './components/Stars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <GameContainer/>
        <StarsContainer/>
      </div>
    );
  }
}

export default App;
