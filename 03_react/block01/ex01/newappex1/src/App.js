import React, { Component } from 'react';


class App extends Component {
   
  render() {
    const arr = ['Antonello', 'George', 'Gosia', 'Luke', 'Linda', 'Norah']
    var looper = arr.map((person,index)=>{
        return (

            <h1 key={index}>{person}</h1>
        )

    })
    return (
      <div >
       {looper}
      </div>
    );
  }
}

export default App;
