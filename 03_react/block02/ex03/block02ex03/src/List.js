import React from 'react';
import Item from './Item'

 class List extends React.Component{
render(){
  this.tero = this.props.array.map((num,i)=> {
        return <h4 key={i}>{num}</h4>

   })
    return(
       <Item jose = {this.tero}/>
          )
    }

}
 export default List;