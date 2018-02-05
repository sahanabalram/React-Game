import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import './Stars.css';

const StarsContainer = (props) => {
    const numberOfStars = 1+ Math.floor(Math.random()*9);
    let stars = [];
    for(let i =0; i <numberOfStars; i++) {
        stars.push(<i className="fa fa-star"></i>);
    }
    return (
        <div>
        {stars}
        </div>
    )
}

export default StarsContainer;