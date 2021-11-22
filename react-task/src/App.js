import './App.css';
import React,{Component} from 'react';
import Buttons from './Buttons/buttons';
import Numbers from './numbers/numbers';



class App extends Component {

  
    state ={
      count:0
    }
  
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  decrement = () => {
    this.setState(prevState => ({
      count: Math.max(prevState.count - 1, 0)
    }));
  };

  reset = () =>{
    this.setState({
      count:0
    })
  }

   functionHelper = () =>{
    if(this.state.count %2 == 0){
      return "Чётное число"
    }else{
      return "Нечётное число"
    }
}

render(){
  return(
    <div className='App'>
          <h2 className="counter">{this.state.count}</h2>
          <Numbers
          functionHelper ={this.functionHelper}
          count={this.state.count}
          />
          <Buttons
          increment ={this.increment}
          decrement ={this.decrement}
          reset = {this.reset}
          />
          
        

    </div>
  )
}
}

export default App;

