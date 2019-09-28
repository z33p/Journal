import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import { loadUser } from "../actions/Accounts/auth";
import store from "../store";
import "../styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Header />
            <Main />
          </>
        </Router>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
