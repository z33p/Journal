import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createArticle } from "../../actions/article";

class ArtPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      subject: this.props.subject
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
    const { title, description, subject } = this.state;
    this.props.createArticle(title, description, subject);
    this.setState({ title: "" });
    this.setState({ description: "" });
  }

  render() {
    if (!this.props.panelOn) return null;

    const { title, description, subject } = this.state;
    return (
      <div className="p-6">
        <h1 className="mb-2 text-3xl font-semibold">Insira o Artigo</h1>
        <div className="text-center">
          <div className="mb-4 text-left">
            <label className="block text-xl" htmlFor="title">
              Título
            </label>
            <input
              className="w-full py-2 text-center text-black"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-4 text-left">
            <label className="block text-xl" htmlFor="description">
              Descrição
            </label>
            <textarea
              className="w-full p-1 text-black"
              type="text"
              name="description"
              id="description"
              rows="4"
              value={description}
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
    );
  }
}

export default connect(
  null,
  { createArticle }
)(ArtPanel);
