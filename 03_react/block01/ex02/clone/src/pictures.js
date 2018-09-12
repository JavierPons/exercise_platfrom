import React from 'react';
import blue from './images/chalk.jpg'
import Item from './Item'

class Pictures extends React.Component{
render(){
    
    this.trackTrack = this.props.product.map((title, ind)=>{

        return <div className='horizontal'>
                    <div 
                        style = {styles.text}
                        key='ind'>{title.title}</div>
                    <img 
                        style = {styles.text}
                        src={blue} width='250'/>
                    <div 
                        style = {styles.text}
                        key='ind'>{title.price}</div>
               </div>
      })
    return(
        <Item loop = {this.trackTrack}/>
    )

}


}
const styles = {
    text:{
        textAlign: 'center',
        
    }
}

export default Pictures;