import './AddingCountersButtons.css';
import React from 'react';

const AddingCountersButtons = ({AddingCounter,removeCounters}) => {


    return (
        <div className="">
            <button onClick ={AddingCounter} >Add Count</button>
            <button onClick ={removeCounters}>Reset</button>
        </div>
    )
}


export default AddingCountersButtons;