import React from 'react'

export default class Login extends React.Component {
    state = {
        username:'', 
        password:''
    }
    handleChange = e => this.setState({[e.target.name]:e.target.value})
    handleSubmit = e => {
        let { username , password } = this.state
        e.preventDefault()
        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }).then((response) => response.json())
              .then((responseJson) => {
                  debugger
                  localStorage.setItem('authToken',JSON.stringify(responseJson.token))
                  alert('Welcome back '+ responseJson.username)
                  this.props.isLoggedIn(true)
        }).catch((e)=>{
            debugger
        })
    }

    render(){
        return (
            <form 
                onChange = {this.handleChange}
                onSubmit = {this.handleSubmit} 
                className="register_form">
                <input 
                    name ='username' 
                    value ={this.state.username} 
                    placeholder="username"
                />
                <input 
                    name ='password' 
                    value ={this.state.password} 
                    placeholder='password'
                />
                <button>Login</button>
            </form>
        )
    }
}
