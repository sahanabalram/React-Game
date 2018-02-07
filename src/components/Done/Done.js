import React from 'react';
import './Done.css';
const DoneContainer = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-outline info" onClick={props.resetGame}>Play Again</button>
        </div>
    );
}

export default DoneContainer;