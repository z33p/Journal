import React, { Component } from 'react';
import Articles from './Articles.jsx';
import Nav from './Nav.jsx';
import Panel from './Panel.jsx';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleNames: []
        }
    }

    getArticleNames() {
        let articleNames = []
        this.props.subject.article_set.forEach(art => {
            articleNames.push(art.title);
        });

        return articleNames;
    }

    render() {
        if (this.props.subject.title === undefined)
           return null

        return(
            <main>
                <section>
                    <Articles article_set = { this.props.subject.article_set }/>
                    <Panel articleNames = { this.getArticleNames() }/>
                </section>
                
                <Nav articleNames = { this.getArticleNames() }/>

            </main>

        );
    }
}

export default Main;
