import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Register from './Register.jsx';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    changeToRegister() {
        ReactDom.render(<Register />, document.getElementById('root'))
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit() {
        console.table(this.state)
        fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: new Headers({
                'Content-type': 'application/json; charset=utf-8',
                "X-CSRFToken": this.props.csrftoken,
            }),
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.token);
        })
        .catch((err) => console.log("Err: " + err))
    }
    
    render() {
        const { username, password } = this.state;
        return (
            <div className = "Login">
                <div>
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
                    
                    <button onClick = { this.onSubmit }>Login</button>
                </div>
                    
            </div>
        
        );
    }
}

export default Login;