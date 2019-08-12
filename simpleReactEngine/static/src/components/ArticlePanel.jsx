import React, { Component } from 'react';


function ArticlePanel(props) {
    const articlePanelOn = props.articlePanelOn;
    if (articlePanelOn)
        return (
            <div className="panel-article">
                <h3>Title</h3>
                <input type="text"></input>
                
                <h3>Description</h3>
                <textarea></textarea>
                
                <button>Send</button>
            </div>
        );
    
    return <p>Adicionar um novo artigo</p>
}

export default ArticlePanel;
