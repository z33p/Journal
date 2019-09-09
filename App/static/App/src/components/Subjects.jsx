import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSubject } from '../actions/subject'

class Subjects extends Component {
    // state = {  }
    static propTypes = {
        subject: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h1>Subjects</h1>
                <div>
                    {this.yeldSubjects()}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.getSubject();
    }


    yieldSpan(content) {
        let spans = []
        content.split("\n").forEach(chunck => {
            spans.push(
                <span key={spans.length}>{chunck}</span>
            )
        });

        return spans;
    }

    yieldSnippets(art) {
        let snippets = []
        art.snnipet_set.forEach(snnipet => {

            snippets.push(
                snnipet.title
                    ?
                    <snnipet.tag key={snnipet.id}> {snnipet.title} </snnipet.tag>
                    :
                    <p key={snnipet.id}>{this.yieldSpan(snnipet.content)}</p>
            );
        });

        return snippets;
    }

    yieldArticles(subj) {
        let articles = []

        subj.article_set.forEach(art => {
            articles.push(
                <article key={art.id} id={art.title}>
                    <h2>{art.title}</h2>
                    {this.yieldSnippets(art)}

                    <hr />
                </article>
            );
        });

        return articles;
    }

    yeldSubjects() {
        if (this.props.subject === undefined) return null;

        let subjects = []
        this.props.subject.forEach(subj => {
            subjects.push(
                <section key={subj.id}>
                    <h1>{subj.title}</h1>
                    {this.yieldArticles(subj)}
                </section>
            );
        });

        return subjects;
    }

}

const mapStateToProps = state => ({
    subject: state.subject.subject
});

export default connect(mapStateToProps, { getSubject })(Subjects);