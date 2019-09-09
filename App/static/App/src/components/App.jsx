import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './Header.jsx';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    // state = {  }
    render() { 
        return (
            <Provider store={store}>
                <Header />
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById("root"));

export default App;