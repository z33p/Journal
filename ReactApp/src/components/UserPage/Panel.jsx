import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createSubject } from "../../actions/subject";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subj_title: ""
    };

    // Methods
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    createSubject: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.props.createSubject(this.state.subj_title);
    this.setState({ subj_title: "" });
  }

  render() {
    const { subj_title } = this.state;
    return (
      <div className="text-center">
        <div className="inline-block w-2/5 p-6 rounded-lg bg-gray-700 text-white">
          <h1 className="mb-2 text-3xl font-semibold">Insira o Subject</h1>
          <div className="text-center">
            <div className="mb-4 text-left">
              <label className="block text-xl" htmlFor="subj_title">
                Título
              </label>
              <input
                className="w-full py-2 text-center text-black"
                type="text"
                name="subj_title"
                id="subj_title"
                value={subj_title}
                onChange={this.onChange}
              />
            </div>

            <button
              className="py-2 px-6 border border-blue-500 rounded shadow bg-white text-blue-500 font-semibold hover:bg-green-400 hover:text-white hover:border-white"
              type="submit"
              onClick={this.onSubmit}
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createSubject }
)(Panel);
