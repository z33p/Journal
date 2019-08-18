import React, { Component } from 'react';
import Articles from './Articles.jsx';
import Nav from './Nav.jsx';
import Panel from './Panel.jsx';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateDom: 0
        }


        this.getArticles = this.getArticles.bind(this);
        this.pushArticle = this.pushArticle.bind(this);
        this.pushSnippet = this.pushSnippet.bind(this);

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

    pushArticle(newArticle) {
        this.props.subject.article_set.push(newArticle);
        let value = this.state.updateDom;
        this.setState({ updateDom: ++value });
    }

    pushSnippet(newSnippet) {
        // https://medium.com/@benjamincherion/how-to-break-an-array-in-javascript-6d3a55bd06f6
        this.props.subject.article_set.every((art) => {
            if (art.id === newSnippet.article) {
                art.htmlsnnipet_set.push(newSnippet)
                return false;
            }

            return true;
        });

        let value = this.state.updateDom;
        this.setState({ updateDom: ++value });
    }

    render() {
        if (this.props.subject.title === undefined)
           return null
        
        let articlesState = this.getArticles();
        return(
            <main>
                <section>
                    <Panel
                        articleNames = { articlesState.title }
                        articleId =  { articlesState.id }
                        pushArticle = { this.pushArticle }
                        pushSnippet = { this.pushSnippet }
                    />
                    
                    <Articles
                        article_set = { this.props.subject.article_set }
                    />
                    
                </section>
                
                <Nav articleNames = { articlesState.title }/>

            </main>

        );
    }
}

export default Main;
