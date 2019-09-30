import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/Accounts/auth";

class Header extends Component {
  // state = {  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func
  };

  render() {
    const { isAuthenticated, logout } = this.props;
    return (
      <header className="bg-gray-900 text-white font-serif">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Journal</h1>
          <p>IFS Daily Journal - ADS</p>
        </div>

        <nav className="pt-3 md:pb-1 text-xl md:text-2xl text-center md:text-right">
          <div className="inline-block">
            <Link className="mr-4 md:mr-6" to="/">
              Home
            </Link>
            <Link className="mr-4 md:mr-6" to="/about/">
              Sobre
            </Link>
            <Link className="mr-4 md:mr-6" to="/subject/">
              Assuntos
            </Link>
            <Link className="md:mr-6" to="/login/">
              {isAuthenticated ? "Perfil" : "Login"}
            </Link>
            {/* <span className="md:mr-12 cursor-pointer" onClick={logout}>
              Logout
            </span> */}
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.reducers.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
