import React, { Component } from 'react';
import ReactDom from 'react-dom';
import About from './About';
import Login from './Login';
import Main from './Main';


class Base extends Component {
    state = {}

    changeToAbout() {
        ReactDom.render(<About />, document.getElementById('root'))
    }

    changeToLogin() {
        ReactDom.render(<Login />, document.getElementById('root'))
    }

    changeToMain() {
        ReactDom.render(<Main />, document.getElementById('root'))
    }

    lineStyle = {
        stroke: "#fff",
        strokeWidth: "2px",
        strokeLinecap: "round"
    };

    render() { 
        return ( 
            <React.Fragment>
                <div id="logo" >
                    <h1>Journal</h1>
                    <p>IFS Daily Journal - ADS</p>
                </div>
                <ul>
                    <li onClick={this.changeToMain}>Home Page</li>
                    <li onClick={this.changeToAbout}>About</li>
                    <li style={{position: "relative", cursor: "default"}}>
                        <span>
                            Subjects
                            <svg width="10px" height="8px" style={{marginLeft: "5px"}}>       
                                <line x1="0px" y1="0px" x2="5px" y2="5px" style={this.lineStyle}/>
                                <line x1="10px" y1="0px" x2="5px" y2="5px" style={this.lineStyle}/>
                            </svg>
                        </span>
                        
                        <ul>
                            <li><a href="http://localhost:8000/BancoDeDados1/">Banco de Dados I</a></li>
                            <li><a href="http://localhost:8000/EstruturaDeDados/">Estrutura de Dados</a></li>
                        </ul>
                    </li>

                    <li onClick={this.changeToLogin}>Log in</li>
                </ul>
                    
                    

            </React.Fragment>
         );
    }
}
 
export default Base;