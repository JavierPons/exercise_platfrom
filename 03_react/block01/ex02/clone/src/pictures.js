import React from 'react';
import blue from './images/chalk.jpg'


class Pictures extends React.Component{
render(){
    const resurce = [
        {title: 'black',
       img:'red',
       price: 200},
       {title: 'white',
       img:'blue',
       price: 34},
       {title: 'red',
       img:'./images/clound.jpg',
       price: 100},
       {title: 'grey',
       img:'./images/footBlackBoard.jpg',
       price: 70}
    
    ]
    var trackTrack = resurce.map((title, ind)=>{

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
        <div>
        {trackTrack}

        </div>
    )

}


}
const styles = {
    text:{
        textAlign: 'center',
        
    }
}

export default Pictures;