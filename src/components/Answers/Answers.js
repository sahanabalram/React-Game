import React, {Component} from 'react';
import './Answers.css';

const AnswersContainer = (props) => {
    return (
        <div>
            {props.selectedNumbers.map((number,i) =>
                <span key={i} onClick={() => props.unselectNumber(number)} className="badge badge-pill badge-danger">{number}</span>
            )}
            
        </div>

    )
}

export default AnswersContainer;