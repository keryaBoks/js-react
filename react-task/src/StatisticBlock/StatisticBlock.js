import './statisticBlock.css';
import React from 'react';

const statisticBlock = ({countersSum,countersValuesSum}) => {


    return (
        <div className="statisticBlock">
            <div> Количество счётчиков на экране: {countersSum()}</div>
            <div> Сумма значений всех счётчиков: {countersValuesSum()}</div>            
        </div>
    )
}


export default statisticBlock;



