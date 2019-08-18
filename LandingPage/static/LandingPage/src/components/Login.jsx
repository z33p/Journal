import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Register from './Register.jsx';


class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    changeToRegister() {
        ReactDom.render(<Register />, document.getElementById('root'))
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    
    render() {
        const { username, password } = this.state;
        return (
            <div className = "Login">
                <form action = { this.onSubmit } >
                    <h1>Login Page</h1>
    
                    <div className = "separator">
                        <input
                            name = "username"
                            type = "text"
                            placeholder = "USER"
                            value = { username }
                            onChange = { this.onChange }>
                        </input>

                        <input
                            name = "password"
                            type = "password"
                            placeholder = "PASSWORD"
                            value = { password }
                            onChange = { this.onChange }>
                        </input>
                    </div>
    
                    <small onClick  =  { this.changeToRegister }>Create an Account</small>
                    
                    <button type = "submit">LOGIN</button>
                </form>
                    
            </div>
        
        );
    }
}

export default Login;