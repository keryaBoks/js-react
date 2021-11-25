import './buttons.css';
import React  from 'react';

const Buttons =({decrement, reset,increment,removeCounter,id,count})=> {

console.log(count,'count')
  return(
    <div className="counter_button" >
              {count >0 && 
                <button onClick={ ()=> decrement(id)} className="decrement"  >-</button>}
             
          <button onClick={()=> reset(id)} className="reset"  >Reset</button>
          <button onClick={()=> increment(id)} className="increment"  >+</button>
          <button onClick={() => removeCounter(id)} className="">Удалить счётчик</button>
    </div>
  )
}


export default Buttons;