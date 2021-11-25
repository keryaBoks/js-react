import './Counter.css';
import React from 'react';
import Buttons from '../Buttons/buttons'
import Numbers from '../numbers/numbers';




const Counter = ({id,count,increment,decrement,reset,removeCounter}) => {

 

  const functionHelper = () => {
    return `${count % 2 !== 0 ? 'Не' : ''}чётное число`
  }



  return (
    <div className="App">
      <h2 className="counter">{count}</h2>
      <Numbers
        functionHelper={functionHelper}
        count={count}
      />
        <Buttons
          increment={increment}
          decrement={decrement}
          reset={reset}
          removeCounter = {removeCounter}
          id={id}
          count={count}
      
        />
    </div>
  )


}


export default Counter;