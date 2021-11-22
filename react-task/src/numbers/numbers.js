import './numbers.css';
import React  from 'react';

const Numbers =props=> {

    const wordsClasses = ['words']

    if(props.count % 2 == 0){
        wordsClasses.push('green')
    } else{
         wordsClasses.push('blue')
    }
 console.log (props, 'sfq')
  return(
  
        <div className={wordsClasses.join(" ")}>
            {props.functionHelper(props.count)}
        </div>
 
  )
}


export default Numbers;