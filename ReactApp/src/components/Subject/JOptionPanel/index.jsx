import React, { Component } from "react";
import SubjPanel from "./SubjPanel.jsx";
import ArtPanel from "./ArtPanel.jsx";

class JOptionPanel extends Component {
  // state = {}
  render() {
    return (
      <div className="">
        <SubjPanel />
        <div className="p-2">
          <h1 className="text-3xl semibold">Hello, I'm a panel</h1>
          <hr className="my-2" />
          <ArtPanel subject={31} />
          <hr className="my-2" />
        </div>
      </div>
    );
  }
}

export default JOptionPanel;
