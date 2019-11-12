import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createArticle } from "../../../actions/article";

class ArtPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    // Methods
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    createArticle: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.props.createArticle(
      this.state.title,
      this.state.description,
      this.props.subject
    );
    let state = this.state;
    state.title = "";
    state.description = "";
    this.setState(state);
  }

  render() {
    const { title, description } = this.state;
    return (
      <div className="">
        <h1 className="mb-2 text-3xl">Insira o Artigo</h1>
        <div className="mb-4">
          <input
            className="w-full shadow p-2 bg-gray-900 text-white"
            type="text"
            name="title"
            id="title"
            placeholder="Título do artigo:"
            value={title}
            onChange={this.onChange}
          />
        </div>
        <textarea
          className="w-full mb-2 shadow p-2 bg-gray-900 text-white"
          type="text"
          name="description"
          id="description"
          placeholder="Descrição do artigo:"
          rows="4"
          value={description}
          onChange={this.onChange}
        />

        <div className="w-full text-right">
          <button className="dark-button" type="submit" onClick={this.onSubmit}>
            Criar
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createArticle }
)(ArtPanel);
