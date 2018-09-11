import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';

class App extends Component {
  render() {
    var arr1 = ['Arja','Elena','Irma','Joe','Angu']
    var arr2 = [43,42,37,87,56];

    this.uno = arr1.map((person ,ind)=> {
      return(
         <h1 key={ind}>{person}</h1>
      )
})

this.dos = arr2.map((age,ind)=> {
  return (
        <h1 key={ind}>{age}</h1>
          )
})
    return (
      <div className="App">
      
        <Child1 name = {this.uno}/>
        <Child2 age = {this.dos}/>
      </div>
    );
  }
}

export default App;
