import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import './Game.css';

class GameContainer extends Component {
    render() {
        return (
            <Jumbotron>
                <h1 className="text-center">Play Nine</h1>
            </Jumbotron>
        )
    }
}

export default GameContainer;