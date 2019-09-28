import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  // state = {  }

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    return (
      <header className="bg-gray-900 text-white font-serif">
        <div className="text-center">
          <h1 className="pt-2 text-4xl font-bold">Journal</h1>
          <p>IFS Daily Journal - ADS</p>
        </div>

        <nav className="pt-3 md:pt-0 text-xl md:text-2xl text-right">
          <Link className="mr-6 cursor-pointer" to="/">
            Home
          </Link>
          <Link className="mr-6 cursor-pointer" to="/about/">
            About
          </Link>
          <Link className="mr-6 cursor-pointer" to="/subjects/">
            Subjects
          </Link>
          <Link className="mr-6 md:mr-12 cursor-pointer" to="/login/">
            {this.props.isAuthenticated ? "Perfil" : "Log in"}
          </Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Header);
