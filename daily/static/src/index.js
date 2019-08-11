import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';
import Base from './components/Base.jsx';


ReactDom.render(<Base />, document.getElementById('base'))
ReactDom.render(<App />, document.getElementById('root'))
