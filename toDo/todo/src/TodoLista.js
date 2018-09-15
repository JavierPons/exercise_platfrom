import React from 'react';

class TodoLista extends React.Component{
    
    render(){
        
        let listNameFromParent =  this.props.listNameFromParent || []
       
        this.toma = listNameFromParent.map((item,i)=>{
                return <li className='item' key={i}>{item.todo}</li>
            })
        return(
            <ul className='box' >{this.toma}</ul>
        )

    }
}

export default TodoLista;