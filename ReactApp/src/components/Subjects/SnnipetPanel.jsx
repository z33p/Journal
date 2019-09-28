import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createArticle } from "../../actions/article";

class SnnipetPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      tag: "p",
      article: this.props.articles[0].title
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
    const { title, content, subject } = this.state;
    this.props.createArticle(title, content, subject);
    this.setState({ title: "" });
    this.setState({ content: "" });
  }

  loadOptArt() {
    const { snnipet_set, snnipet_id } = this.props.article_set;
    let options = [];
    for (let i in snnipet_set) {
      options.push(
        <option key={snnipet_set[i]} value={snnipet_set[i]}>
          {snnipet_id[i]}
        </option>
      );
    }

    return options;
  }

  render() {
    if (!this.props.panelOn) return null;

    const { title, content, subject } = this.state;
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
            <label className="block text-xl" htmlFor="content">
              Descrição
            </label>
            <textarea
              className="w-full p-1 text-black"
              type="text"
              name="content"
              id="content"
              rows="4"
              value={content}
              onChange={this.onChange}
            />
          </div>

          <div className="my-4">
            <select
              className="p-2 bg-white text-blue-500"
              name="subject"
              id="subject"
              value={subject}
              onChange={this.onChange}
            >
              {this.loadOptArt()}
            </select>
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
)(SnnipetPanel);
