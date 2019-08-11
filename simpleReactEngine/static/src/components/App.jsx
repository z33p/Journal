import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Main from './Main.jsx'
import Header from './Header.jsx'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {},
        }

        const username = document.getElementById("username").innerHTML;
        // fetch api doc: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
        fetch(`http://localhost:8000/sre/api/users/${username}/`)
        .then(res => res.json())
        .then(data => {
                let index = data.subject_name.indexOf(document.title);
                let id = data.subject_set[index];
                fetch(`http://localhost:8000/sre/api/subject/${id}/`)
                .then(res => res.json())
                .then(data => this.setState({ subject: data }));
            }
        );
    }

    render() {
        return (
            <>
                <Header title={ this.state.subject.title }/>
                <Main subject={ this.state.subject }/>
            </>
        );
    }
}

export default App;
