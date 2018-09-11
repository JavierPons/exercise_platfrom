import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
class App extends Component {
  render() {
     this.arr = [65,34,21,12,23,54,32,17];
    return (
      <div >
        <List array ={this.arr}/>
        
      </div>
    );
  }
}

export default App;
