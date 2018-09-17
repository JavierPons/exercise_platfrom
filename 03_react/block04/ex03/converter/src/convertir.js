import React from 'react'


class Convert extends React.Component{

    render(){

        return(
            <h5> {this.props.gradosF}F° are {this.props.grados} C°</h5>
            
        )

    }


}

export default Convert;