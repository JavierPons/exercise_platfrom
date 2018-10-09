import React from 'react';
import './bin.png';
class TodoLista extends React.Component{

    deleteItem(i){
        let listNameFromParent =  this.props.listNameFromParent || []
        this.setState(listNameFromParent.splice(i,1));
        } 
    

    render(){
       
        let listNameFromParent =  this.props.listNameFromParent || []
        this.toma = listNameFromParent.map((item,i)=>{
                
                return <li 
                        style ={{textDecoration:item.textDecoration}}
                        className='item' key={i} 
                            onClick={()=> this.props.changeProp(i)} >
                            <img 
                                className='bin' onClick={()=>this.deleteItem(i)} 
                                src={require('./bin.png')} alt='bin' />
                           {item.todo}
                        </li>
                     
            })
                return(
                       <ul className='box' >{this.toma}</ul>
        )

    }
}

export default TodoLista;