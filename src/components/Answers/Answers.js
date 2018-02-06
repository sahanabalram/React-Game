import React, {Component} from 'react';
import './Answers.css';

const AnswersContainer = (props) => {
    return (
        <div>
            <h4>Answer Selected</h4>
            {props.selectedNumber.map((number,i) =>
                <span key={i} className="badge badge-pill badge-danger">{number}</span>
            )}
            
        </div>

    )
}

export default AnswersContainer;