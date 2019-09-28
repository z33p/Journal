import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ArtPanel from "./ArtPanel.jsx";
import { getSubject } from "../../actions/subject";
import DisplayControl from "./DisplayControl.jsx";
import SnnipetPanel from "./SnnipetPanel.jsx";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlePanelOn: false,
      snnipetPanelOn: true
    };

    this.props.getSubject(this.props.user.subject_set[0]);
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    subject: PropTypes.object.isRequired
  };

  loadArticles() {
    let articles = [];

    this.props.subject.article_set.forEach(art => {
      articles.push(
        <div key={art.id}>
          <h2>{art.title}</h2>
          <p>{art.description}</p>

          <div>{this.loadSnippet(art)}</div>
        </div>
      );
    });

    return articles;
  }

  loadSnippet(art) {
    let snnipets = [];

    art.snnipet_set.forEach(snnipet => {
      snnipets.push(<p key={snnipet.id}>{snnipet.content}</p>);
    });

    return snnipets;
  }

  render() {
    const { user, subject } = this.props;
    return (
      <main className="">
        <div className="text-center py-6 border-b shadow-lg">
          <div className="inline-block w-1/2 bg-gray-700 text-white">
            <ArtPanel
              panelOn={this.state.articlePanelOn}
              subject_name={user.subject_name}
              subject_set={user.subject_set}
            />
            <DisplayControl
              objState={this.state.articlePanelOn}
              display_on={() => {
                this.setState({ articlePanelOn: true });
              }}
              display_off={() => {
                this.setState({ articlePanelOn: false });
              }}
              msg_on="Clique para inserir artigos"
            />
          </div>

          <div className="inline-block w-1/2 bg-gray-700 text-white">
            <SnnipetPanel
              panelOn={this.state.snnipetPanelOn}
              articles={user.subject_name.article_set}
            />
            <DisplayControl
              objState={this.state.articlePanelOn}
              display_on={() => {
                this.setState({ articlePanelOn: true });
              }}
              display_off={() => {
                this.setState({ articlePanelOn: false });
              }}
              msg_on="Clique para inserir snnipets"
            />
          </div>
        </div>

        {subject.id === undefined ? null : (
          <div className="">{this.loadArticles()}</div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  subject: state.subject.subject
});

export default connect(
  mapStateToProps,
  { getSubject }
)(Subjects);
