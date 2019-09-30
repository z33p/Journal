import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Subject from "./Subject/index.jsx";
import UserPage from "./UserPage/index.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <PrivateRoute path="/subject/" component={Subject} />
      <PrivateRoute path="/user/" component={UserPage} />
      <Route path="/login/" component={Login} />
      <Route path="/register/" component={Register} />
    </Switch>
  );
}

export default Main;
