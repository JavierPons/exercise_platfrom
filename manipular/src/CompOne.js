import React from 'react'
export default class CompOne extends React.Component{
    handleSubmit(e){
            e.preventDefault()
                var data = this.refs.data.value
                this.refs.data.value=""
                console.log(data)
    }
    render(){
                return (
                        <form onSubmit={this.handleSubmit.bind(this)}> 
                                <input ref ="data"/>
                        </form>
                )
    }
}


