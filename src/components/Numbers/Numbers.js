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
            </div>
        </div>
    );
}

export default NumbersContainer;
