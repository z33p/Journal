import React, { Component } from "react";
import ReactDom from "react-dom";
import Header from "./Header.jsx";
import { loadUser } from "../actions/Accounts/auth";
import "../styles.css";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  constructor(props) {
    super(props);
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
