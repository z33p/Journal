import React, { Component } from "react";
import { connect } from "react-redux";
import { patchArticle } from "../../../actions/article";
import Snnipets from "./Snnipets.jsx";

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
      <article className="relative  my-4 p-4">
        {insertMode ? (
          <div className="">
            <div className="">
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
              className="w-full h-32 p-1 border text-sm text-gray-600"
            />
          </div>
        ) : (
          <div className="mb-6">
            <div className="">
              <h2 className="inline text-3xl">{title}</h2>
              {this.editImg()}
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        )}

        <Snnipets
          snnipets={this.props.art.snnipet_set}
          art_id={this.props.art.id}
        />
      </article>
    );
  }
}

export default connect(
  null,
  { patchArticle }
)(Artigo);
