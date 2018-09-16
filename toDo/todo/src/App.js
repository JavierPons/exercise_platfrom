import React, { Component } from 'react';
import './App.css';
import TodoLista from './TodoLista'

class App extends Component {
  constructor(){
    super()
    this.state = {text:'',
                  todos:[],
                  checked:false}
    
  }
  
  handleSubmit = (e) => {
  
    e.preventDefault();      // prevent reload of page
    var text = this.refs.input.value.trim()  //text assigned to the typed in input
    this.setState({text})   // set new state to that input
    this.refs.input.value = '';  // delete input field
    console.log(text)       // console.log input
    let {todos} = this.state;  
    todos.push({todo:text,checked:false})
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
        <TodoLista  listNameFromParent={this.state.todos}/>
      </div>
    );
  }
}

export default App;
