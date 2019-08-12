import React, { Component } from 'react';
import ArticlePanel from './ArticlePanel.jsx';
import HtmlSnippetPanel from './HtmlSnippetPanel.jsx';
import DisplayControl from './elements/DisplayControl.jsx';


class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articlePanelOn: false,
            htmlSnippetPanelOn: false
        }
    }

    render() {
        return (
            <footer>
                <div className="panel-blocks">
                    <ArticlePanel articlePanelOn = { this.state.articlePanelOn }/>
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
                    <HtmlSnippetPanel
                        htmlSnippetPanelOn = { this.state.htmlSnippetPanelOn } 
                        articleNames = { this.props.articleNames }
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
 
export default Panel;