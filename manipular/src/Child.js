import React from 'react';

export default class Child extends React.Component{
    constructor(){
        super()
        this.state = {text: ''}
    }
 handleClicks = (e) => {
   
     var text =  e.target.value;
     
 }
    render(){
        return (
            <div>
            <input
                type = 'text'
                onChange  = {this.handleClicks}/>
                <h1>{this.state.text}</h1>
            </div>
        )
    }

}