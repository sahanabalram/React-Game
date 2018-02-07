import React, {Component} from 'react';
import {Grid, Col, Row, Jumbotron} from 'react-bootstrap';
import ButtonConatiner from '../Button';
import StarsContainer from '../Stars';
import AnswerContainer from '../Answers';
import NumberContainer from '../Numbers';
import DoneContainer from '../Done';
import './Game.css';

class GameContainer extends Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        usedNumber: [
            7, 9
        ],
        answerIsCorrect: null,
        redraws: 5,
        doneStatus: null
    };
    
    resetGame = () => {
        this.setState()
    };
    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
            return;
        }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState
                .selectedNumbers
                .concat(clickedNumber)
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState
                .selectedNumbers
                .filter(number => number !== clickedNumber)
        }));
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars === prevState
                .selectedNumbers
                .reduce((acc, n) => acc + n, 0)
        }));
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState
                .usedNumbers
                .concat(prevState.selectedNumbers),
            selectedNumber: [],
            answerIsCorrect: null,
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
        }));
    }

    redraw = () => {
        if (this.state.redraws === 0) {
            return;
        }
        this.setState(prevState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            answerIsCorrect: null,
            selectedNumber: [],
            redraws: prevState.redraws - 1
        }));
    }

    possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
        const possibleNumbers = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ].filter(number => usedNumbers.indexOf(number) === -1);
    }

    updateDoneStatus = () => {
        this.setState = (prevState => {
            if (prevState.usedNumbers.length === 9) {
                return {doneStatus: 'Done. Nice!'}
            }

            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return {doneStatus: 'Game Over!'};
            }
        });
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
                                <ButtonConatiner
                                    selectedNumbers={this.state.selectedNumbers}
                                    checkAnswer={this.checkAnswer}
                                    answerIsCorrect={this.answerIsCorrect}
                                    redraw={this.redraw}
                                    redraws={this.redraws}
                                    acceptAnswer={this.acceptAnswer}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12} m={12} lg={12}>
                                <AnswerContainer
                                    selectedNumbers={this.state.selectedNumbers}
                                    unselectNumber={this.unselectNumber}/>
                            </Col>
                        </Row>
                             <DoneContainer  resetGame={this.resetGame} doneStatus={this.doneStatus}/>
                            <NumberContainer
                                selectedNumbers={this.state.selectedNumbers}
                                selectNumber={this.selectNumber}
                                usedNumber={this.usedNumber}/>

                        <Row></Row>
                    </Grid>

                </Jumbotron>
            </div>

        )
    }
}

export default GameContainer;