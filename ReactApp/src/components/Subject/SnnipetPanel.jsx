import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createSnnipet } from "../../actions/snnipet";

class SnnipetPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Trying don't fail",
      content:
        'O libertarismo[1] (em latim: libertas, que significa "liberdade"), algumas vezes traduzido do inglês como libertarianismo, é uma filosofia política que possui o Princípio da Não-Agressão como axioma fundamental e uma certa concepção de direitos de propriedade privada como seu núcleo.[2][3] Libertários historicamente são associados ao anarquismo e ao livre mercado. Hoje alguns tomam a palavra reivindicando a ser ao anarcocapitalistas, no entanto nem todo anarcocapitalista é um libertário. Alguns são anarcocapitalistas utilitaristas, como David Friedman, por exemplo. Outros são anarcocapitalistas por acreditarem no Princípio da Não-Agressão e, portanto, são libertários de fato, como Murray Rothbard e Hans-Hermann Hoppe. Libertários buscam maximizar o respeito à propriedade privada,[4] enfatizando as liberdades políticas, associações voluntárias, e a primazia do julgamento individual.[3][5] Os libertários normalmente não reconhecem uma autoridade justificada no poder do Estado.[6][7][8]',
      tag: "p",
      article: 1
    };

    // Methods
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static propTypes = {
    createSnnipet: PropTypes.func.isRequired
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    const { title, content, tag, article } = this.state;
    this.props.createSnnipet(title, content, tag, article);
    this.setState({ title: "" });
    this.setState({ content: "" });
  }

  loadOptArt() {
    let options = [];
    this.props.articles.forEach(art => {
      options.push(
        <option key={art.id} value={art.id}>
          {art.title}
        </option>
      );
    });

    return options;
  }

  render() {
    if (!this.props.panelOn) return null;

    const { title, content, article } = this.state;
    return (
      <div className="p-6">
        <h1 className="mb-2 text-3xl font-semibold">Insira um texto</h1>
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
              name="article"
              id="article"
              value={article}
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
  { createSnnipet }
)(SnnipetPanel);
