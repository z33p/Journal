import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Nav from "./Nav.jsx";

class UserPage extends Component {
  // state = {};
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const { username } = this.props.user;
    return (
      <main className="flex">
        <Nav />
        <div className="w-full">
          <h1>Hello {username}</h1>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.reducers.auth.user
});

export default connect(mapStateToProps)(UserPage);
