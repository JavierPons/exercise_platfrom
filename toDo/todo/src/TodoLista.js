import React from 'react';

class TodoLista extends React.Component{
    render(){
        debugger;
        let listNameFromParent =  this.props.listNameFromParent
        this.toma = listNameFromParent.map((item,i)=>{
                return <li key={i}>{item}</li>
            })
        return(
            <ul>{this.toma}</ul>
        )

    }
}

export default TodoLista;