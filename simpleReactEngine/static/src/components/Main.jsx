import React, { Component } from 'react';
import Articles from './Articles.jsx';
import Nav from './Nav.jsx';
import Panel from './Panel.jsx';



class Main extends Component {
    constructor(props) {
        super(props);


        this.getArticles = this.getArticles.bind(this);
    }

    getArticles() {
        let articleState = {
            title: [],
            id: []
        }
        
        this.props.subject.article_set.forEach(art => {
            articleState.title.push(art.title);
            articleState.id.push(art.id);
        });

        return articleState;
    }

    render() {
        if (this.props.subject.title === undefined)
           return null
        
        let articlesState = this.getArticles();
        return(
            <main>
                <section>
                    <Articles article_set = { this.props.subject.article_set }/>
                    <Panel
                        articleNames = { articlesState.title }
                        articleId =  { articlesState.id }
                    />
                </section>
                
                <Nav articleNames = { articlesState.title }/>

            </main>

        );
    }
}

export default Main;
