import React from 'react';


class App extends React.Component {
  render() {
    const resurce = [
      {title: 'black',
     img:'./images/backboard.jpg',
     price: 200},
     {title: 'white',
     img:'./images/chalk.jpg',
     price: 34},
     {title: 'red',
     img:'./images/clound.jpg',
     price: 100},
     {title: 'grey',
     img:'./images/footBlackBoard.jpg',
     price: 70}
  
  ]
  var trackTitle = resurce.map((item, index)=>{
      return <div key='index'>
          {item.title}
      </div>

  })
  var trackPrice = resurce.map((price, i)=>{
    return <div key='i'>{price.price}</div>

  })

  var trackImg = resurce.map((img, ind)=>{

    return <img src='{img.img}'width='50'/>
  })
    return (
      <div >
        <h1>hello</h1>
        {trackTitle}
        {trackPrice}
        {trackImg}
        
      </div>
    );
  }
}

export default App;
