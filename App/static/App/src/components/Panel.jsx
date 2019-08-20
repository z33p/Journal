import React, { Component } from 'react';
import ArticlePanel from './ArticlePanel.jsx';
import SnippetPanel from './SnippetPanel.jsx';
import DisplayControl from './elements/DisplayControl.jsx';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlePanelOn: false,
            snippetPanelOn: false
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
                    />
                </div>

                <br/>
                
                <div className="panel-blocks">
                    <SnippetPanel
                        snippetPanelOn = { this.state.snippetPanelOn }
                        onChange = { this.handleInputChange }
                        pushSnippet = { this.props.pushSnippet }
                        articleNames = { this.props.articleNames }
                        articleId = { this.props.articleId }
                        csrftoken = { getCookie('csrftoken') }
                    />
                    
                    <DisplayControl
                        objState = { this.state.snippetPanelOn }
                        display_on = { () => { this.setState({ snippetPanelOn: true }); } }
                        display_off = { () => { this.setState({ snippetPanelOn: false }); } }
                        msg_on = "Display"
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