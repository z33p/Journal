import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSubject } from '../actions/subject'


class Articles extends Component {
    static propTypes = {
        subject: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getSubject();
    }

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

const mapStateToProps = state => ({
    subject: state.subject.subject
});
 
export default connect(mapStateToProps, { getSubject })(Articles);
