import React from 'react';

class TodoLista extends React.Component{
    render(){
        
        this.toma = listNameFromParent.map((item,i)=>{
                return <li key={i}>{item}</li>
            })
        return(
            <ul>{this.toma}</ul>
        )

    }
}

export default TodoLista;