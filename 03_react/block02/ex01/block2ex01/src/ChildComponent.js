import React from 'react';

class ChildComponent extends React.Component{

render(){
    
    return(

       <h1>My name is {this.props.name} I'm as a child</h1>
    )

}


}

export default ChildComponent;