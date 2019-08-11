import React, { Component } from 'react';

function Login() { 
    return (
        <div className="Login">
            <form action="#" method="POST">
                <h1>Login Page</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username"></input>
            
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"></input>

                <label htmlFor="loginBtn"></label>
                <button type="submit" id="loginBtn">LOGIN</button>
            </form>
                
        </div>
    
    );
}

 
export default Login;