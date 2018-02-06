import React, {Component} from 'react';
import './Stars.css';

const StarsContainer = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(
            <i key={i} className="fa fa-star"></i>
        );
    }
    return (
        <div>
            {stars}
        </div>
    )
}

export default StarsContainer;