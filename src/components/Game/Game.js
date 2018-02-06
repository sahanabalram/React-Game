import React, {Component} from 'react';
import {Grid, Col, Row, Jumbotron} from 'react-bootstrap';
import ButtonConatiner from '../Button';
import StarsContainer from '../Stars';
import AnswerContainer from '../Answers';
import NumberContainer from '../Numbers';
import './Game.css';

class GameContainer extends Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    };
    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            selectedNumbers: prevState
                .selectedNumbers
                .concat(clickedNumber)
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState
                .selectedNumbers
                .filter(number => number !== clickedNumber)
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
                                <ButtonConatiner selectedNumbers={this.state.selectedNumbers}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <AnswerContainer
                                    selectedNumbers={this.state.selectedNumbers}
                                    unselectNumber={this.unselectNumber}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <NumberContainer
                                    selectedNumbers={this.state.selectedNumbers}
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