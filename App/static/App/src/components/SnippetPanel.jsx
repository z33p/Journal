import React, { Component } from 'react';
import TitleOrContent from './TitleOrContent.jsx';


class SnippetPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snippetTitle: "",
            snippetContent: "",
            tag: "p",
            articleId: this.props.articleId[0]
        }

        this.listArticles =  this.listArticles.bind(this);
        this.createSnnipet =  this.createSnnipet.bind(this);
    }

    render() {
        if (this.props.snippetPanelOn) {
            return (
                <div className="panel-Snippet">
                    <h2>Snippet Panel</h2>
                    <div className = "separator">
                        <h3>Article</h3>
                        <select
                            name = "articleId"
                            value = { this.state.articleId }
                            onChange = { this.props.onChange.bind(this) }
                        >
                            { this.listArticles() }
                        </select>
                    </div>
    
                    <div className = "separator">
                        <h3>Tag</h3>
                        <select
                            name = "tag"
                            value = { this.state.tag }
                            onChange = { this.props.onChange.bind(this) }
                        >
                            <option value = "a">Anchor tag</option>
                            <option value = "p">Paragrafo</option>
                            <option value = "w">Warning</option>
                            <option value = "img">Link da Imagem</option>
                           
                        </select>
                    </div>
    
                    <div className = "separator">
                        <TitleOrContent
                            tag = { this.state.tag }
                            onChange = { this.props.onChange.bind(this) }
                        />
                    </div>
    
                    <button onClick = { this.createSnnipet }>Send</button>
    
                </div>
            );
    
        } else 
            return <p>Adicionar um novo snippet</p>
    }

    listArticles() {
        let options = []
        this.props.articleNames.forEach(opt => {
            options.push(
                <option
                    key = { this.props.articleId[options.length] }
                    value = { this.props.articleId[options.length] }
                >{ opt }</option>
            )
        });
    
        return options;
    }

    createSnnipet() {
        let newSnippet = {
            "title": this.state.snippetTitle,
            "content": this.state.snippetContent,
            "tag": this.state.tag,
            "article": this.state.articleId
        }

        fetch("http://localhost:8000/api/Snnipet/", {
                method: "POST",
                headers: new Headers({
                    'Content-type': 'application/json; charset=utf-8',
                    "X-CSRFToken": this.props.csrftoken
                }),
                credentials: 'include',
                body: JSON.stringify(newSnippet)
            })
            .then((res) => res.json())
            .then((data) => {
                this.props.pushSnippet(data);
                
            })
            .catch((err) => console.log(err))
    }
}


export default SnippetPanel;
