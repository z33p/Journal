import React, { Component } from 'react';


class Aside extends Component {
    constructor(props) {
        super(props);
        // this.state = {}
    }

    create_li() {
        let liHTML = []
        this.props.articleNames.forEach(name => {
            liHTML.push(
                <li key={ liHTML.length }><a href={ window.location.href + "#" + name }>{ name }</a></li>
            )
        });

        return liHTML;
    }

    render() { 
        return ( 
            <aside>
                <h2>Sumário</h2>
                <ul>
                    { this.create_li() }
                </ul>
            </aside>
        );
    }
}
 
export default Aside;
