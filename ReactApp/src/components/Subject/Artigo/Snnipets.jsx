import React, { Component } from "react";
import SnnipetPanel from "./SnnipetPanel.jsx";
import Snnipet from "./Snnipet.jsx";

class Snnipets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snnipetPanelOn: false
    };
  }

  loadSnnpt() {
    let snnipets = [];

    this.props.snnipets.forEach(snnipet => {
      snnipets.push(<Snnipet key={snnipet.id} snnipet={snnipet} />);
    });

    if (this.state.snnipetPanelOn)
      snnipets.push(<SnnipetPanel key="-1" art_id={this.props.art_id} />);
    else
      snnipets.push(
        <div key="-1" className="w-full text-center">
          <button
            className="dark-button"
            type="button"
            onClick={() => this.setState({ snnipetPanelOn: true })}
          >
            Criar Snnipet
          </button>
        </div>
      );

    return snnipets;
  }

  render() {
    return <div className="">{this.loadSnnpt()}</div>;
  }
}

export default Snnipets;
