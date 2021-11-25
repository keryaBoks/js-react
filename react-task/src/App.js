import React from 'react';
import Counter from './Counter/Counter';
import AddingCountersButtons from './AddingCountersButtons/AddingCountersButtons';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import { useState } from 'react';

const App = () => {

  const [counterArray, setCounterArray] = useState([{ id: 1, count: 0 }, { id: 2, count: 0 }, { id: 3, count: 0 }]);



  const AddingCounter = () => {
    let newElementId =  counterArray.length ? counterArray[counterArray.length - 1].id+1 : 0
    const newArray = counterArray.map(item => {
      if(item.count %2 === 0 ){
        item.count = item.count +1 
        return item
      }
      return item
    })



    setCounterArray([...newArray, {id: newElementId, count: 0 }])
  }


  const countersSum = ()=>{
     return counterArray.length
   }

   const countersValuesSum = () =>{
    let sum = 0
      counterArray.map(item => sum = sum + item.count)
      return sum
   } 

  const removeCounters = () => {
    setCounterArray([])

  }

  const removeCounter = (id) => {

    const newArray = counterArray.map(item => {
      if(item.count %2 === 1){
        item.count = item.count -1 
        return item
      }
      return item
    })
    setCounterArray(newArray.filter(item => item.id !== id))

  }


  const increment = (id) => {
    setCounterArray(counterArray.map(item => {
      if (item.id === id) {
        item.count = item.count + 1;
        return item
      }

      return item

    }))
  }


  const decrement = (id) => {
    setCounterArray(counterArray.map(item => {
      if (item.id === id && item.count >= 1) {
        item.count = item.count - 1;
        return item
      }

      return item

    }))
  }



  const reset = (id) => {
    setCounterArray(counterArray.map(item => {
      if (item.id === id) {
        item.count = 0
        return item
      }
      return item
    }))
  }


  return (
    <div className="">
       <StatisticBlock
       countersValuesSum={countersValuesSum}
         countersSum={countersSum}
         />
      <AddingCountersButtons
        AddingCounter={AddingCounter}
        removeCounters={removeCounters}
      />
      <div>
        {counterArray.map(counter => {
          return <Counter
            id={counter.id}
            count={counter.count}
            removeCounter={removeCounter}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
        })}
      </div>
    </div>
  )
}


export default App;

