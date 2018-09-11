import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import ChildComponent from './ChildComponent';

 class App extends Component {
   
   render() {
     
     this.name = 'Child component'
     return (
       <div className="App">
         <div>Todo va bien por ahora.... investigar, paciencia. Pensar. Deducir. Resolver</div>
         

 <ChildComponent name = {this.name}/>
       </div>
     );
   }
 }

 export default App;