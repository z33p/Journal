import React, { Component } from "react";
import Artigo from "./Artigo.jsx";

class Articles extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  loadArts() {
    const { article_set } = this.props;
    let articles = [];

    article_set.forEach(art => {
      articles.push(<Artigo key={art.id} art={art} />);
    });

    return articles;
  }

  render() {
    return (
      <div className="inline-block md:w-3/4 text-left">{this.loadArts()}</div>
    );
  }
}

export default Articles;
