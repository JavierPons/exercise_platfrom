import React from 'react';
import pictures from './pictures'
import Pictures from './pictures';

class App extends React.Component {
  render() {
    this.resurce = [
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
