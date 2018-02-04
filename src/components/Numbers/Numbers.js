import React, {Component} from 'react';
import './Numbers.css';

const NumbersContainer = (props) => {
    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
                <h4 className="card-title">Success card title</h4>
                <p className="card-text">Some quick example text to build on the card title and
                    make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default NumbersContainer;
