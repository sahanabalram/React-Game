import React, { Component } from 'react';
import GameContainer from './components/Game';
import StarsContainer from './components/Stars';
import ButtonContainer from './components/Button';
import AnswersContainer from './components/Answers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <GameContainer/>
        <StarsContainer/>
        <ButtonContainer/>
        <AnswersContainer/>
      </div>
    );
  }
}

export default App;
