import React, { Component } from 'react';


class Articles extends Component {

    createSpan(content) {
        let spans = []
        content.split("\n").forEach(chunck => {
            spans.push(
                <span key={ spans.length }>{ chunck }</span>
            )
        });

        return spans;
    }

    createSnippets(art) {
        let snippets = []
        art.snnipet_set.forEach(snnipet => {
            
            snippets.push(
                snnipet.title
                ? 
                <snnipet.tag key={snnipet.id}> { snnipet.title } </snnipet.tag>
                :
                <p key={snnipet.id}>{ this.createSpan(snnipet.content) }</p>
            );
        });

        return snippets;
    }

    createArticles() {
        let articles = []

        this.props.article_set.forEach(art => {
            articles.push(
                <article key={art.id} id={art.title}>
                    <h2>{ art.title }</h2>
                    { this.createSnippets(art) }
                    
                    <hr/>
                </article>
            );
        });

        return articles;

    }

    render() { 
        return (
            <div className="articles">
                {this.createArticles() }
            </div>
        );
    }
}
 
export default Articles;
