import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';


ReactDom.render(<Header />, document.getElementById('base'))
ReactDom.render(<App />, document.getElementById('root'))
