import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ArtPanel from "./ArtPanel.jsx";
import { getSubject } from "../../actions/subject";
import DisplayControl from "./DisplayControl.jsx";
import SnnipetPanel from "./SnnipetPanel.jsx";
import SubjPanel from "./SubjPanel.jsx";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlePanelOn: false,
      snnipetPanelOn: false,
      articles: [],
      subject_selected: 0
    };
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    getSubject: PropTypes.func.isRequired,
    subject: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps, prevState) {
    const { subject_selected } = this.state;
    if (prevState.subject_selected !== subject_selected)
      this.props.getSubject(subject_selected);

    if (prevProps.subject !== this.props.subject) {
      let articles = []; // Arr of obj with name and id

      this.props.subject.article_set.forEach(art => {
        articles.push({ id: art.id, title: art.title });
      });
      this.setState({ articles });
    }
  }

  loadSubj() {
    const { user } = this.props;

    let subjects = [];
    for (const i in user.subject_set) {
      subjects.push(
        <div
          key={user.subject_set[i]}
          className="mr-4 py-1 px-4 text-lg bg-gray-900 text-white cursor-pointer"
          onClick={() =>
            this.setState({ subject_selected: user.subject_set[i] })
          }
        >
          {user.subject_name[i]}
        </div>
      );
    }
    return subjects;
  }

  loadArts() {
    let articles = [];
    this.props.subject.article_set.forEach(art => {
      articles.push(
        <div className="border shadow my-4 p-4" key={art.id}>
          <h2 className="text-3xl py-2">{art.title}</h2>
          <p className="text-sm text-gray-600">{art.description}</p>

          <div>{this.loadSnnpt(art)}</div>
        </div>
      );
    });

    return articles;
  }

  loadSnnpt(art) {
    let snnipets = [];

    art.snnipet_set.forEach(snnipet => {
      snnipets.push(
        <div key={snnipet.id}>
          <h3>{snnipet.title}</h3>
          <p className="text-justify md:text-left">{snnipet.content}</p>
        </div>
      );
    });

    return snnipets;
  }

  render() {
    const { subject, match } = this.props;
    return (
      <main className="">
        <div className="flex items-center text-center p-6 border-b shadow-lg overflow-x-auto">
          {this.loadSubj()}
        </div>

        <SubjPanel />

        {subject.id === undefined ? null : (
          <div className="border-b shadow-lg my-6 text-center">
            <div className="inline-block md:w-3/4 text-left">
              {this.loadArts()}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="inline-block shadow-lg my-6 w-1/2 bg-gray-800 text-white">
            <ArtPanel
              panelOn={this.state.articlePanelOn}
              subject={match.params.id}
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
          <br />
          <div className="inline-block shadow-lg my-6 w-1/2 bg-gray-800 text-white">
            <SnnipetPanel
              panelOn={this.state.snnipetPanelOn}
              articles={this.state.articles}
            />
            <DisplayControl
              objState={this.state.snnipetPanelOn}
              display_on={() => {
                this.setState({ snnipetPanelOn: true });
              }}
              display_off={() => {
                this.setState({ snnipetPanelOn: false });
              }}
              msg_on="Clique para inserir snnipets"
            />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.reducers.auth.user,
    subject: state.reducers.subject
  };
};

export default connect(
  mapStateToProps,
  { getSubject }
)(Subject);
