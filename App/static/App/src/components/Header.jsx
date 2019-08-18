import React, { Component } from 'react';
import Logo from './elements/Logo.jsx';


function Header(props) {
    if (props.title === undefined)
        return null

    return (
        <>
            <header className="fake-header">
                <Logo />
                <h1 id="title" >{props.title}</h1>
                <ul></ul>
            </header>
            
            <div className="fake-header">
                <Logo />
                <h1 id="title" >{props.title}</h1>
                <ul></ul>
            </div>

        </>
        
    );
}
 
export default Header;