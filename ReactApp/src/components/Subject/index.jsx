import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Articles from "./Articles.jsx";
import ArtPanel from "./ArtPanel.jsx";
import { getSubject } from "../../actions/subject";
import { deleteSubject } from "../../actions/subject";
import DisplayControl from "./DisplayControl.jsx";
import SnnipetPanel from "./SnnipetPanel.jsx";
import SubjPanel from "./SubjPanel.jsx";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlePanelOn: false,
      snnipetPanelOn: false,
      articles: [], // Arr of obj article with name and id
      subject_selected: 0
    };
  }

  static propTypes = {
    subject: PropTypes.object.isRequired,
    subjects: PropTypes.array.isRequired,
    getSubject: PropTypes.func.isRequired,
    deleteSubject: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps, prevState) {
    const { subject_selected } = this.state;
    if (prevState.subject_selected !== subject_selected)
      this.props.getSubject(subject_selected);

    if (prevProps.subject !== this.props.subject) {
      let articles = [];
      this.props.subject.article_set.forEach(art => {
        articles.push({ id: art.id, title: art.title });
      });
      this.setState({ articles });
    }
  }

  loadSubj() {
    let subjects = [];
    this.props.subjects.forEach(subj => {
      subjects.push(
        <div
          key={subj.id}
          className="block relative mr-4 bg-gray-900 text-white cursor-pointer"
        >
          <span
            className="whitespace-no-wrap py-2 px-4 text-lg"
            onClick={() => this.setState({ subject_selected: subj.id })}
          >
            {subj.title}
          </span>
          <img
            className="absolute"
            style={{ top: -5 + "px", right: -5 + "px" }}
            width={15 + "px"}
            height={15 + "px"}
            src="https://image.flaticon.com/icons/svg/148/148766.svg"
            onClick={() => {
              if (confirm("Realmente quer deletar este assunto?"))
                this.props.deleteSubject(subj.id);
            }}
          />
        </div>
      );
    });
    return subjects;
  }

  render() {
    const { subject } = this.props;
    return (
      <main className="">
        <div className="flex items-center text-center p-6 border-b shadow-lg overflow-x-auto">
          {this.loadSubj()}
        </div>

        <SubjPanel />

        {subject.id === undefined ? null : (
          <div className="border-b shadow-lg my-6 text-center">
            <Articles article_set={subject.article_set} />
          </div>
        )}

        <div className="text-center">
          {this.props.subject.id === undefined ? null : (
            <div className="inline-block shadow-lg my-6 w-1/2 bg-gray-800 text-white">
              <ArtPanel
                panelOn={this.state.articlePanelOn}
                subject={this.props.subject.id}
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
          )}
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
    subject: state.reducers.subject,
    subjects: state.reducers.auth.user.subjects
  };
};

export default connect(
  mapStateToProps,
  { getSubject, deleteSubject }
)(Subject);
