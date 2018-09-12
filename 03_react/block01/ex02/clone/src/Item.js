import React from 'react';

class Item extends React.Component{
    render(){

        return(
            <div>
                {this.props.loop}
            </div>
        )

    }

}
export default Item;