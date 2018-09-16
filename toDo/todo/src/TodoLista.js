import React from 'react';
import './bin.png';
class TodoLista extends React.Component{
    deleteItem(){
        null
    }
    render(){
        
        let listNameFromParent =  this.props.listNameFromParent || []
       
        this.toma = listNameFromParent.map((item,i)=>{
                return <li className='item' key={i}><img onClick={this.deleteItem().bin(this)} 
                        className='bin' src={require('./bin.png')} alt='bin' />   {item.todo}</li>
            })
                return(
                       <ul className='box' >{this.toma}</ul>
        )

    }
}

export default TodoLista;