import React from 'react';

class TodoLista extends React.Component{
    constructor(){
        super()
    }
    render(){
        
        let listNameFromParent =  this.props.listNameFromParent || []
       
        this.toma = listNameFromParent.map((item,i)=>{
                return <li key={i}>{item.todo}</li>
            })
        return(
            <ul>{this.toma}</ul>
        )

    }
}

export default TodoLista;