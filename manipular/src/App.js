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
   debugger
    this.arr = ['l','T','f']
    this.spl = this.state.shown.split('');
    this.arr.push(this.spl);
    for(var i = 0; i < this.arr.length; i++){
     debugger;
      if(this.arr[i] === this.arr[i].toUpperCase()){
       let message = 'Exist uppercase'
      }else{
       let message =  'There is not uppercase, try again'
      }
    }
    return (
      <div>
          <input 
              onChange = {this.handleChange.bind(this)}
              name = "text" value = {this.state.text}/>
              
              <button onClick={this.handleShow.bind(this)}>create a password</button>
               <h1>{this.message}</h1>
              <h1>Password character well pass</h1>   
      </div>
    );
  }
}

