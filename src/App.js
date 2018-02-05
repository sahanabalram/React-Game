import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import GameContainer from './components/Game';
import StarsContainer from './components/Stars';
import ButtonContainer from './components/Button';
import AnswersContainer from './components/Answers';
import NumbersContainer from './components/Numbers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <GameContainer/>
        <Grid>
          <Row>
            <Col-5>
              <StarsContainer/>
            </Col-5>

            <Col-2>
              <ButtonContainer/>
            </Col-2>

            <Col-2>
              <AnswersContainer/>
            </Col-2>
          </Row>

        </Grid>
      <NumbersContainer/>
      </div>
    );
  }
}

export default App;
