import React, { Component } from 'react';
import ArticlePanel from './ArticlePanel.jsx';
import SnippetPanel from './SnippetPanel.jsx';
import DisplayControl from './elements/DisplayControl.jsx';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlePanelOn: false,
            htmlSnippetPanelOn: false
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value // target.type === 'checkbox' ? target.checked : ;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <footer className = "Panel">
                <div className="panel-blocks">
                    <ArticlePanel
                        articlePanelOn = { this.state.articlePanelOn }
                        onChange = { this.handleInputChange }
                        pushArticle = { this.props.pushArticle }
                        csrftoken = { getCookie('csrftoken') }
                    />
                    <DisplayControl
                        objState = { this.state.articlePanelOn }
                        display_on = { () => { this.setState({ articlePanelOn: true }); } }
                        display_off = { () => { this.setState({ articlePanelOn: false }); } }
                        msg_on = "Display"
                        msg_off = "Hide"
                    />
                </div>

                <br/>
                
                <div className="panel-blocks">
                    <SnippetPanel
                        htmlSnippetPanelOn = { this.state.htmlSnippetPanelOn }
                        onChange = { this.handleInputChange }
                        pushSnippet = { this.props.pushSnippet }
                        articleNames = { this.props.articleNames }
                        articleId = { this.props.articleId }
                        csrftoken = { getCookie('csrftoken') }

                    />
                    
                    <DisplayControl
                        objState = { this.state.htmlSnippetPanelOn }
                        display_on = { () => { this.setState({ htmlSnippetPanelOn: true }); } }
                        display_off = { () => { this.setState({ htmlSnippetPanelOn: false }); } }
                        msg_on = "Display"
                        msg_off = "Hide"
                    />
                </div>
                
            </footer>
         );
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
 
export default Panel;