import React from 'react';
import pictures from './pictures'
import Pictures from './pictures';
import blacboard from './images/backboard.jpg'
import chalk from './images/chalk.jpg'
import  clound from './images/clound.jpg'
import  magnetic from './images/magnetic-jpg.jpg'
import second from './images/secondBlackBoard.jpg'
import pencil from './images/pencil.jpg'
import  heart from './images/heart.jpg'
import foot from './images/footBlackBoard.jpg'
class App extends React.Component {
  render() {
   
    this.resurce = [
      {title: 'black',
     img: blacboard,
     price: 200},
     {title: 'white',
     img: chalk,
     price: 34},
     {title: 'red',
     img: clound,
     price: 100},
     {title: 'grey',
     img: magnetic,
     price: 70},
     {title: 'new',
     img: second,
     price: 170},
     {title: 'good',
     img: pencil,
     price: 40},
     {title: 'heart',
     img: heart,
     price: 120},
     {title: 'hope',
     img: foot,
     price: 270}
  
  ]
    return (
      <div>
        <div id='header'>
         <img src="//cdn.shopify.com/s/files/1/0074/8332/t/3/assets/logo.png?17902661737951945714" alt="Chalkd Ltd"/>
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>BLOG</li>
            <li>CUSTOM</li>
            <li>CORPORATE</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <Pictures product = {this.resurce}/>
      </div>
    );
  }
}

export default App;
