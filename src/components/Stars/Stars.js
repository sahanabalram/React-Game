import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './Stars.css';

const StarsContainer = (props) => {
    return (
        <div>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        </div>
    )
}

export default StarsContainer;