import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createSubject } from "../../../actions/subject";

class SubjPanel extends Component {
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
        <div className="inline-block my-4 shadow bg-gray-900 text-white">
          <input
            className="pl-2 py-2 bg-gray-900 shadow-lg"
            type="text"
            name="subj_title"
            id="subj_title"
            placeholder="Título do assunto:"
            value={subj_title}
            onChange={this.onChange}
          />
        </div>

        <button className="dark-button" type="submit" onClick={this.onSubmit}>
          Criar
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { createSubject }
)(SubjPanel);
