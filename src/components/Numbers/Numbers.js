import React, {Component} from 'react';
import './Numbers.css';

const NumbersContainer = (props) => {
    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Numbers</div>
            <div className="card-body">
            <span class="badge badge-pill badge-danger">1</span>
            <span class="badge badge-pill badge-danger selected">2</span>
            <span class="badge badge-pill badge-danger used">3</span>
            <span class="badge badge-pill badge-danger">4</span>
            <span class="badge badge-pill badge-danger">5</span>
            <span class="badge badge-pill badge-danger">6</span>
            <span class="badge badge-pill badge-danger">7</span>
            <span class="badge badge-pill badge-danger">8</span>
            <span class="badge badge-pill badge-danger">9</span>
            </div>
        </div>
    );
};

NumbersContainer.list = 1,10;

export default NumbersContainer;
