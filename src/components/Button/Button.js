import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import './Button.css';

const ButtonContainer = (props) => {
    let button;
    switch (props.answerIsCorrect) {
        case true:
            button = <ButtonToolbar>
                <Button className="btn btn-outline-success" onClick={props.acceptAnswer}>
                    <i className="fa fa-check"></i>
                </Button>
            </ButtonToolbar>
            break;
        case false:
            button = <ButtonToolbar>
                <Button className="btn btn-outline-danger">
                    <i className="fa fa-times"></i>
                </Button>
            </ButtonToolbar>
            break;
        default:

            button = <ButtonToolbar>
                <Button
                    onClick={props.checkAnswer}
                    className="btn btn-outline-info"
                    disabled={props.selectedNumbers.length === 0}>=</Button>
            </ButtonToolbar>
            break;
    }
    return (
        <div>
            <ButtonToolbar>
                {button}
                <button className="btn btn-outline-warning" onClick={props.redraw}
                    disabled={props.redraws===0}>
                    <i className="fa fa-refresh"></i>{props.redraws}5</button>
            </ButtonToolbar>
        </div>
    )
}

export default ButtonContainer;