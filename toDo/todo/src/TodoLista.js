import React from 'react';
import './bin.png';
class TodoLista extends React.Component{
    findItem(i){
        let listNameFromParent =  this.props.listNameFromParent || []
        this.setState(listNameFromParent.splice(i,1));
        } 
    render(){
        
        let listNameFromParent =  this.props.listNameFromParent || []
       
        this.toma = listNameFromParent.map((item,i)=>{
            
                     if(item.checked === false){
                       return <li className='item' key={i}  ><img 
                        className='bin' onClick={()=>this.findItem(i)} src={require('./bin.png')} alt='bin' />   {item.todo}</li>
                     }else{
                       return  <li className='itemTrue' key={i}><img 
                        className='bin' src={require('./bin.png')} alt='bin' />   {item.todo}</li>}
            })
                return(
                       <ul className='box' >{this.toma}</ul>
        )

    }
}

export default TodoLista;