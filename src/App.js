import React, {Component} from 'react';
import GameContainer from './components/Game';
// import StarsContainer from './components/Stars';
// import ButtonContainer from './components/Button';
// import AnswersContainer from './components/Answers';
// import NumbersContainer from './components/Numbers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <GameContainer/>
      </div>
    );
  }
}

export default App;
