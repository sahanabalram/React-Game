import React, { Component } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import './Button.css';

const ButtonContainer = (props) => {
    return (
        <div>
        <ButtonToolbar>
            <Button bsStyle="info" disabled={props.selectedNumbers.length === 0}>=</Button>
        </ButtonToolbar>
        </div>
    )
}

export default ButtonContainer;