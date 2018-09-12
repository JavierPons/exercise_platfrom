import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {text:''}
    
  }
  
  
  handleSubmit = (e) => {
    e.preventDefault();      // prevent reload of page
    var text = this.refs.input.value.trim()
    this.setState({text})
    //this.refs.input.value = '';
    console.log(text)
    this.todo.push(text)
    console.log(this.todo)
  }
   
  render() {
    this.todo = []
    return (
      <div className="App">
        <h2>toDo App</h2>
        <h4>Add something to remember</h4>
        <form onSubmit ={this.handleSubmit.bind(this)}>
        <input ref = 'input'/> <button >+ add</button>
        </form>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default App;
