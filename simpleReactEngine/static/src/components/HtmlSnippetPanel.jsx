import React, { Component } from 'react';


function TitleOrContent(props) {
    if (props.htmlTag === "p")
        return (
            <>
                <h3>Content</h3>
                <textarea></textarea>
            </>
        );
    
    else
        return (
            <>
                <h3>Title</h3>
                <input type="text"></input>
            </>
        );
}

class HtmlSnippetPanel extends Component {
    state = {
        htmlTag: "a"
    }

    createOptions() {
        let options = []
        this.props.articleNames.forEach(opt => {
            options.push(
                <option key={ options.length } value={ opt }>{ opt }</option>
            )
        });
    
        return options;
    }

    render() {
        if (this.props.htmlSnippetPanelOn) {
            return (
                <div className="panel-htmlSnippet">
                    <h3>Article</h3>
                    <select name="articles">
                        { this.createOptions() }
                    </select>
    
                    <h3>Html Tag</h3>
                    <select
                        name="htmlTag"
                        onChange={ () => { this.setState(
                            { htmlTag: document.getElementsByName("htmlTag")[0].value })
                        }}>
                        <option value="a">Anchor tag</option>
                        <option value="img">Imagem link</option><option value="a">Anchor tag</option>
                        <option value="p">Paragraph</option>
                        <option value="li">List item</option>
                    </select>
    
                    <TitleOrContent htmlTag = { this.state.htmlTag }/>
    
                    <button>Send</button>
    
                </div>
            );
    
        } else 
            return <p>Adicionar um novo html snippet</p>
    }
}
 
export default HtmlSnippetPanel;
