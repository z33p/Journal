import React, { Component } from 'react';



class Articles extends Component {

    createSpan(content) {
        let spans = []
        content.split("\n").forEach(chunck => {
            spans.push(
                <span key={spans.length}>{ chunck }</span>
            )
        });

        return spans;
    }

    createHtmlSnippets(art) {
        let htmlSnippets = []
        art.htmlsnnipet_set.forEach(snnipet => {
            
            htmlSnippets.push(
                snnipet.title
                ? 
                <snnipet.htmlTag key={snnipet.id}> { snnipet.title } </snnipet.htmlTag>
                :
                <p key={snnipet.id}>{ this.createSpan(snnipet.content) }</p>
            );
        });

        return htmlSnippets;
    }

    createArticles() {
        let articles = []

        this.props.article_set.forEach(art => {
            console.log(art.title);
            articles.push(
                <article key={art.id} id={art.title}>
                    <h2>{ art.title }</h2>
                    { this.createHtmlSnippets(art) }
                </article>
            );
        });

        return articles;

    }

    render() { 
        return ( 
            <>
            { this.createArticles() }
            </>
         );
    }
}
 
export default Articles;
