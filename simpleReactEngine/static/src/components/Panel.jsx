import React, { Component } from 'react';

function ArticlePanel(props) {
    return (
        <div className="panel-article">
            <h3>Title</h3>
            <input type="text"></input>
            
            <h3>Description</h3>
            <textarea></textarea>
            
            <button>Send</button>
        </div>
    );
}

function AddArticle_p(props) {
    return (
        <p>Adicionar um novo artigo</p>
    );
}

function ManagerArticlePanel(props) {
    const articlePanelON = props.articlePanelON;
    if (articlePanelON)
        return <ArticlePanel />
    
    return <AddArticle_p />
}

function ButtonArtPaneldisplay(props) {
    return (
      <button onClick={ props.onClick }>
        Display
      </button>
    );
}


function ButtonArtPanelhide(props) {
    return (
      <button onClick={ props.onClick }>
        Hide
      </button>
    );
}
  

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlePanelON: false
        }

        this.displayPanelArticle = this.displayPanelArticle.bind(this);
        this.hidePanelArticle = this.hidePanelArticle.bind(this);

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

    displayPanelArticle() {
        this.setState({articlePanelON: true});
      }
    
    hidePanelArticle() {
    this.setState({articlePanelON: false});
    }

    render() {
        const articlePanelON = this.state.articlePanelON;
        let displayControl;

        if (articlePanelON) {
            displayControl = <ButtonArtPanelhide onClick={ this.hidePanelArticle } />;
        } else {
            displayControl = <ButtonArtPaneldisplay onClick={ this.displayPanelArticle }/>
        }
        return (
            <footer>
                <div className="panel-blocks">
                    <ManagerArticlePanel articlePanelON = { this.state.articlePanelON }/>
                    { displayControl }
                </div>

                <br/>
                
                <div className="panel-blocks">
                    <div className="panel-htmlSnippet">
                        <h3>Article</h3>
                        <select name="articles">
                            { this.createOptions() }
                        </select>

                        <h3>Html Tag</h3>
                        <select name="htmlTag">
                            <option value="a">Anchor tag</option>
                            <option value="img">Imagem link</option><option value="a">Anchor tag</option>
                            <option value="p">Paragraph</option>
                            <option value="li">List item</option>
                        </select>

                        <h3>Title</h3>
                        <input type="text"></input>

                        <h3>Content</h3>
                        <textarea></textarea>

                    </div>

                    <button>Send</button>
                </div>
                
            </footer>
         );
    }
}
 
export default Panel;