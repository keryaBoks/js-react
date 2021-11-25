import './numbers.css';
import React from 'react';

const Numbers = ({ count, functionHelper }) => {


    return (
        <div className={`words${count % 2 === 0 ? "green" : "blue"}`}>
            {functionHelper(count)}
        </div>
    )
}


export default Numbers;