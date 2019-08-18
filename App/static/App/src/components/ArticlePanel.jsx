import React, { Component } from 'react';


class ArticlePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTitle: "",
            articleDescription: ""
        }

        this.createArticle = this.createArticle.bind(this);
    }

    render() {
        if (this.props.articlePanelOn)
            return (
                <div className="panel-article">
                    <h2>Article Panel</h2>
                    <div className = "separator">
                        <h3>Title</h3>
                        <input
                            type = "text"
                            name = "articleTitle"
                            value = { this.state.value }
                            required = { true }
                            onChange = { this.props.onChange.bind(this) }
                        ></input>
                    </div>
                    
                    <div className = "separator">
                        <h3>Description</h3>
                        <textarea
                            rows = "10"
                            name = "articleDescription"
                            value = { this.state.description }
                            onChange = { this.props.onChange.bind(this) }
                        ></textarea>
                    </div>
                    
                    
                    <button
                        onClick={ this.createArticle }
                        type="submit"
                    >Send</button>
                </div>
            );
        
        return <p>Adicionar um novo artigo</p>
        }

    createArticle() {
        const username = document.getElementById("username").innerHTML;
        /* https://dev.to/dev_amaz/using-fetch-api-to-get-and-post--1g7d */
        fetch(`http://localhost:8000/api/users/${username}/`)
        .then(res => res.json())
        .then(data => {
            let index = data.subject_name.indexOf(document.title);
            let id = data.subject_set[index];
            let newArticle = {
                title: this.state.articleTitle,
                description: this.state.articleDescription,
                subject: id
            }

            fetch("http://localhost:8000/api/article/", {
                method: "POST",
                headers: new Headers({
                    'Content-type': 'application/json; charset=utf-8',
                    "X-CSRFToken": this.props.csrftoken
                }),
                credentials: 'include',
                body: JSON.stringify(newArticle)
            })
            .then((res) => res.json())
            .then((data) => {
                console.table(data);
                this.props.pushArticle(data);
                
            })
            .catch((err) => console.log("Err: " + err))
        });
    }
}


export default ArticlePanel;
