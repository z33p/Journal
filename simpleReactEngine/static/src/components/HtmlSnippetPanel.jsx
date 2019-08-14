import React, { Component } from 'react';


class HtmlSnippetPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snippetTitle: "",
            snippetContent: "",
            htmlTag: "p",
            articleId: this.props.articleId[0]
        }

        this.listArticles =  this.listArticles.bind(this);
        this.createSnnipet =  this.createSnnipet.bind(this);
    }

    TitleOrContent() {
        if (this.state.htmlTag === "p")
            return (
                <>
                <h3>Content</h3>
                <textarea
                    rows = "10"
                    name = "snippetContent"
                    onChange = { this.props.onChange.bind(this) }
                ></textarea>
                </>
            );
        
        else return (
                <>
                <h3>Title</h3>
                <input
                    name = "snippetTitle"
                    type = "text"
                    onChange = { this.props.onChange.bind(this) }
                ></input>
                </>
            );
    }

    render() {
        if (this.props.htmlSnippetPanelOn) {
            return (
                <div className="panel-htmlSnippet">

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
                        <h3>Html Tag</h3>
                        <select
                            name = "htmlTag"
                            value = { this.state.htmlTag }
                            onChange = { this.props.onChange.bind(this) }
                        >
                            <option value = "a">Anchor tag</option>
                            <option value = "img">Imagem link</option><option value="a">Anchor tag</option>
                            <option value = "p">Paragraph</option>
                            <option value = "li">List item</option>
                        </select>
                    </div>
    
                    <div className = "separator">
                        { this.TitleOrContent() }
                    </div>
    
                    <button onClick = { this.createSnnipet }>Send</button>
    
                </div>
            );
    
        } else 
            return <p>Adicionar um novo html snippet</p>
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
            "htmlTag": this.state.htmlTag,
            "article": this.state.articleId
        }

        fetch("http://localhost:8000/sre/api/htmlSnnipet/", {
                method: "POST",
                headers: new Headers({
                    'Content-type': 'application/json; charset=utf-8',
                    "X-CSRFToken": this.props.csrftoken
                }),
                credentials: 'include',
                body: JSON.stringify(newSnippet)
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    
}


 
export default HtmlSnippetPanel;
