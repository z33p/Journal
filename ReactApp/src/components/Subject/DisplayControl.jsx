import React, { Component } from "react";

class DisplayControl extends Component {
  // state = {  }
  lineStyle = {
    stroke: "#fff",
    strokeWidth: "3px",
    strokeLinecap: "round"
  };

  render() {
    const objStateON = this.props.objState;

    if (objStateON) {
      return (
        <button
          className="w-full p-1 text-center bg-gray-800"
          onClick={this.props.display_off}
        >
          {/* this.props.msg_off */}
          <svg className="inline" width="20px" height="16px">
            <line
              x1="0px"
              y1="16px"
              x2="10px"
              y2="8px"
              style={this.lineStyle}
            />
            <line
              x1="20px"
              y1="16px"
              x2="10px"
              y2="8px"
              style={this.lineStyle}
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button className="w-full p-4" onClick={this.props.display_on}>
          {this.props.msg_on}
        </button>
      );
    }
  }
}

export default DisplayControl;
