import React, { Component } from "react";

class Snnipet extends Component {
  constructor(props) {
    super(props);

    const { title, content } = this.props.snnipet;
    this.state = {
      title,
      content,
      tag: "p"
    };

    // Methods
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { snnipet } = this.props;
    return (
      <div className="">
        {/* TODO: Add input option, state variables, and an icon to toggle input */}
        <div key={snnipet.id}>
          <h3 className="text-2xl">{snnipet.title}</h3>
          <hr className="mb-2 " />
          <p className="my-3 text-justify md:text-left">{snnipet.content}</p>
        </div>
      </div>
    );
  }
}

export default Snnipet;
