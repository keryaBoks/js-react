import './buttons.css';
import React  from 'react';

const Buttons =props=> {


  return(
    <div className="counter_button" >
              <button onClick={props.decrement} className="decrement"  >-</button>
          <button onClick={props.reset} className="reset"  >Reset</button>
          <button onClick={props.increment} className="increment"  >+</button>
    </div>
  )
}


export default Buttons;