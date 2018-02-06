import React, {Component} from 'react';
import './Numbers.css';

const NumbersContainer = (props) => {
    const numberArray = [1,2,3,4,5,6,7,8,9];
    let numbers = [];
    for(let i = 0; i <numberArray.length; i++) {
        numbers.push(<span className="badge badge-pill badge-danger">{numberArray[i]}</span>)
    }

    const numberClassName = (props) => {
        if(props.selectedNumber.indexOf(numbers) >= 0) {
            return 'selected';
        }
    }
    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Numbers</div>
            <div className="card-body">
            {numbers.map((numbers,i) => 
                <span  class="badge badge-pill badge-danger" onClick={() => props.selectNumber(numbers)}>
                {numbers}
                </span>
            )}
            </div>
        </div>
    );
}

export default NumbersContainer;
