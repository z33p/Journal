import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <main className="h-screen-85 text-center bg-gray-200">
        <div className="inline-block mt-12 w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="mb-4 text-3xl">Log in</h1>
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="username@server"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={this.onChange}
              />
              <p className="hidden text-red-500 text-xs italic">
                Please choose a password.
              </p>
              <Link className="italic" to="/journal/register/">
                Create an account?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enter
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          {/* <p className="text-center text-gray-500 text-xs">
                &copy;2019 Acme Corp. All rights reserved.
            </p> */}
        </div>
      </main>
    );
  }
}

export default Login;
