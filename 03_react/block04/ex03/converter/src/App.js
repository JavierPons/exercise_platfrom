import React, { Component } from 'react';
import './App.css';
import Convert from './convertir'
class App extends Component {
  debugger
  constructor(){
    super()
    this.state = {
      text:'',
      result: 0
    }
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    var text = this.refs.input.value.trim()
    this.setState({text})
    this.refs.input.value = ''
  }

  degree(){
   var num = this.state.text;
   var conv =Math.floor((num -32) / 1.8) 
   console.log(conv)
    this.setState({
        result: conv
    }, ()=>{console.log(this.state.result)})
    
  }

  render() {
   
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input  ref='input'/>
        <button onClick={this.degree.bind(this)}>Covert to Celsius</button>
        </form>
        <Convert grados={this.state.result}  gradosF={this.state.text}/>
      </div>
    );
  }
}

export default App;
