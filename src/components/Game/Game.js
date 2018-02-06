import React, {Component} from 'react';
import {Grid, Col, Row, Jumbotron} from 'react-bootstrap';
import ButtonConatiner from '../Button';
import StarsContainer from '../Stars';
import AnswerContainer from '../Answers';
import NumberContainer from '../Numbers';
import './Game.css';

class GameContainer extends Component {
    state = {
        selectedNumber: [],
        randomNumberOfStars: 1+ Math.floor(Math.random()*9)
    };
    selectNumber = (clickedNumber) => {
        this.setState(prevState =>({
            selectedNumber: prevState.selectedNumber.concat(clickedNumber)
        }));
    }
    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1 className="text-center">Play Nine</h1>
                    <hr/>
                    <Grid>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <StarsContainer numberOfStars={this.state.randomNumberOfStars}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <ButtonConatiner/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <AnswerContainer selectedNumber={this.state.selectedNumber}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <NumberContainer selectedNumber={this.state.selectedNumber}
                                                    selectNumber={this.selectNumber}/>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>

        )
    }
}

export default GameContainer;