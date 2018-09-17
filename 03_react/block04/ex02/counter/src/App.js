import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
       counter:0
    }
  }
  pressing(){
      this.setState({
      counter: this.state.counter + 1
      
    })
    if(this.state.counter == 9){
      this.setState({
        counter:0
      })
    }
  }
    
    render() {
    debugger
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.pressing.bind(this)}>Press</button>
      </div>
    );
  }
}

export default App;
