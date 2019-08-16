import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CreateAccount from './CreateAccount.jsx';


class Login extends Component {
    // state = {  }

    changeToCreateAccount() {
        ReactDom.render(<CreateAccount />, document.getElementById('root'))
    }
    
    render() { 
        return (
            <div className="Login">
                <form action="#" method="POST">
                    <h1>Login Page</h1>
    
                    <div className="separator">
                        <input type="text" placeholder="USER"></input>
                        <input type="password" placeholder="PASSWORD"></input>
                    </div>
    
                    <small onClick = { this.changeToCreateAccount }>Create an Account</small>
                    
                    <button type="submit">LOGIN</button>
                </form>
                    
            </div>
        
        );
    }
}

export default Login;