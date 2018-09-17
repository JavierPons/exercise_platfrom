import React from 'react'

export default class Home extends React.Component{

    render(){

        return (
                <h1>Gallery {this.props.match.params.something}</h1>

        )
    }
}