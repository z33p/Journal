import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header.jsx'

class App extends Component {
    // state = {  }
    render() { 
        return (
            <Header />
        );
    }
}

ReactDom.render(<App />, document.getElementById("root"));

export default App;