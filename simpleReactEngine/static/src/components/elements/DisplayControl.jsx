import React, { Component } from 'react';


class DisplayControl extends Component {
    // state = {  }
    render() {

        const objStateON = this.props.objState;

        if (objStateON) {
            return (
                <button onClick={ this.props.display_off }>
                    { this.props.msg_off }
                </button>
            );

        } else {
            return (
                <button onClick={ this.props.display_on }>
                    { this.props.msg_on }
                </button>
            );
        }
        
    }
}
 
export default DisplayControl;