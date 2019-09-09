import React, { Component } from 'react';
import Home from './Home.jsx'
import About from './About.jsx'
import Subjects from './Subjects.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class Header extends Component {
    // state = {  }
    render() {
        return (
            <Router>
                <header className="bg-gray-900 text-white font-serif">
                    <div className="text-center">
                        <h1 className="pt-2 text-4xl font-bold">Journal</h1>
                        <p>IFS Daily Journal - ADS</p>
                    </div>

                    <nav className="pt-3 md:pt-0 text-xl md:text-2xl text-right">
                        <Link className="mr-6 cursor-pointer" to="/journal/">Home</Link>
                        <Link className="mr-6 cursor-pointer" to="/journal/about/">About</Link>
                        <Link className="mr-6 cursor-pointer" to="/journal/subjects/">Subjects</Link>
                        <Link className="mr-6 md:mr-12 cursor-pointer" to="/journal/login/">Log in</Link>
                    </nav>
                </header>

                <Switch>
                    <Route path="/journal/" exact component={Home} />
                    <Route path="/journal/about/"  component={About} />
                    <Route path="/journal/subjects/"  component={Subjects} />
                    <Route path="/journal/login/" component={Login} />
                    <Route path="/journal/register/" component={Register}/>
                </Switch>
            </Router>
        );
    }
}

export default Header;