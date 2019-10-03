import React, { Component } from "react";
import { connect } from "react-redux";
import { patchArticle } from "../../actions/article";

class Artigo extends Component {
  constructor(props) {
    super(props);

    const { title, description } = this.props.art;
    this.state = {
      title,
      description,
      insertMode: false
    };

    // Methods
    this.onChange = this.onChange.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { art } = this.props;
    if (prevProps.art !== art) {
      let state = this.state;
      state.title = art.title;
      state.description = art.description;
      this.setState(state);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeMode() {
    if (this.state.insertMode) {
      this.setState({ insertMode: false });
      this.props.patchArticle(
        this.props.art.id,
        this.state.title,
        this.state.description
      );
    } else {
      this.setState({ insertMode: true });
    }
  }

  editImg() {
    return (
      <img
        className="float-right m-2 p-1 cursor-pointer"
        // TODO: Use the img from Django static files
        src="https://image.flaticon.com/icons/png/512/2081/2081090.png"
        alt="Edit"
        width={30 + "rem"}
        height={30 + "rem"}
        onClick={this.changeMode}
      />
    );
  }

  render() {
    const { title, description, insertMode } = this.state;
    return (
      <article className="relative border shadow my-4 p-4">
        {insertMode ? (
          <div className="w-full">
            <div className="border p-2 mb-4">
              <input
                value={title}
                onChange={this.onChange}
                name="title"
                className="w-11/12 text-3xl"
              />
              {this.editImg()}
            </div>
            <textarea
              value={description}
              onChange={this.onChange}
              name="description"
              className="w-full h-48 p-2 text-sm text-gray-600 border border-gray-400"
            />
          </div>
        ) : (
          <div className="w-full">
            <div className="border p-2 mb-4">
              <h2 className="inline text-3xl">{title}</h2>
              {this.editImg()}
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        )}

        <div>{this.loadSnnpt(this.props.art)}</div>
      </article>
    );
  }

  loadSnnpt(art) {
    let snnipets = [];

    art.snnipet_set.forEach(snnipet => {
      snnipets.push(
        <div key={snnipet.id}>
          <h3>{snnipet.title}</h3>
          <p className="text-justify md:text-left">{snnipet.content}</p>
        </div>
      );
    });

    return snnipets;
  }
}

export default connect(
  null,
  { patchArticle }
)(Artigo);
