import React from 'react';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = { text:'', shown:'', }
  }
  handleChange(e){
      this.setState({[e.target.name]:e.target.value})
  }
  handleShow () {
    this.setState({shown:this.state.text},()=>{
      this.setState({text:''})
    })
  }
  render() {

    this.arr = []
    this.spl = this.state.shown.split('');
    this.arr.push(this.spl);
    
    for(var i = 0; i < this.spl.length; i++){
     
      if(this.sql[i] === this.spl[i].toUpperCase()){
       this.message = 'Exist uppercase' 
      }else{
       this.message =  'There is not uppercase, try again'
      }
      if(this.spl.length < 8){
        this.message = 'It should have minimun 8 characters'
      }else{
        this.message = 'Password character well pass'
      }
      
    }
    return (
      <div>
          <input 
              onChange = {this.handleChange.bind(this)}
              name = "text" value = {this.state.text}/>
              
              <button onClick={this.handleShow.bind(this)}>create a password</button>
               <h1>{this.message}</h1>
      </div>
    );
  }
}

