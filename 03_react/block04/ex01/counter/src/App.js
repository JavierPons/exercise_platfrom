import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
          count: 0
          
    }
   
  }
  componentWillMount(){
    this.setState({count:0})
  }

  counterPress(){
    this.setState({
        count:this.state.count + 1
    })
  }

  shouldComponentUpdate(nextProps, nextState){
      if(this.state.count % 2 !== 1){
       return this.state.count;
      }
  }


  render() {
    return (
      <div className="App">
          <h1>{this.state.count}</h1>
       <button onClick={this.counterPress.bind(this)}>press</button>
       
      </div>
    );
  }
}

export default App;
