import React, { Component } from 'react';
import ReactDom from 'react-dom';
import About from './About.jsx';
import Login from './Login.jsx';
import Main from './Main.jsx';


class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
    }

    componentWillMount() {
        const username = document.getElementById("username").innerHTML;
        fetch(`http://localhost:8000/sre/api/users/${username}/`)
        .then(res => res.json())
        .then(data => this.setState({subjects: data.subject_name}));
    }

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
        let num = 0;
        const subjectItens = this.state.subjects.map(subject => (
            <li key={num++}><a href={`http://localhost:8000/sre/${subject}`}>{subject}</a></li>
        ));
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
                            {subjectItens}
                        </ul>
                    </li>

                    <li onClick={this.changeToLogin}>Log in</li>
                </ul>

            </React.Fragment>
         );
    }
}

export default Base;

// links
// https://www.youtube.com/watch?v=93p3LxR9xfM&t=605s
