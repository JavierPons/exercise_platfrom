import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {text:'',
                  todos:[]}
    
  }
  
  handleSubmit = (e) => {
    debugger
   e.preventDefault();      // prevent reload of page
    var text = this.refs.input.value.trim()
    this.setState({text})
    this.refs.input.value = '';
    console.log(text)
    let {todos} = this.state;
    todos.push({todo:text})
    this.setState({todos:todos})
  }
   
  render() {

    
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
