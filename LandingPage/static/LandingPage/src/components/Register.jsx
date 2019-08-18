import React, { Component } from 'react';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            email: "",
            password: "",
            password_again: ""
         }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        const { username, email, password, password_again } = this.state;
        return (
            <div className = "Register">
                <form action = { this.onSubmit }>
                    <div className = "form-group">
                        <label htmlFor = "username">User</label>
                        <input
                            id = "username"
                            name = "username"
                            type = "text"
                            value =  {username}
                            onChange = { this.onChange }
                        />

                        <label htmlFor = "email">Email</label>
                        <input
                            id = "email"
                            name = "email"
                            type = "email"
                            value = {email}
                            onChange = { this.onChange }
                        />

                        <label htmlFor = "password">Password</label>
                        <input
                            id = "password"
                            name = "password"
                            type = "text"
                            value = {password}
                            onChange = { this.onChange }
                        />

                        <label htmlFor = "password_again">Password (again)</label>
                        <input
                            id = "password_again"
                            name = "password_again"
                            type = "text"
                            value = {password_again}
                            onChange = { this.onChange }
                        />
                    </div>

                    <button type = "submit">Register</button>
                </form>
            </div>
         );
    }
}
 
export default Register;