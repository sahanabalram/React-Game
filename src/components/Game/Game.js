import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import './Game.css';

class GameContainer extends Component {
    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1 className="text-center">Play Nine</h1>
                    <hr/>
                </Jumbotron>
            </div>

        )
    }
}

export default GameContainer;