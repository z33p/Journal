import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.jsx'
import Header from './Header.jsx'


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('root'));