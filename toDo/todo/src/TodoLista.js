import React from 'react';
import './bin.png';
class TodoLista extends React.Component{
   changeLi(){
       
       console.log('checked')
   }

    render(){
        
        let listNameFromParent =  this.props.listNameFromParent || []
       
        this.toma = listNameFromParent.map((item,i)=>{
            
                     if(item.checked === false){
                       return <li className='item' key={i} onClick={this.changeLi} ><img 
                        className='bin' src={require('./bin.png')} alt='bin' />   {item.todo}</li>
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