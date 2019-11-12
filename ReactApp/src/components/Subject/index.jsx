import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Artigo from "./Artigo/index.jsx";
import JOptionPanel from "./JOptionPanel/index.jsx";
import { getSubject } from "../../actions/subject";
import { deleteSubject } from "../../actions/subject";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [] // Arr of obj article with name and id
    };
  }

  static propTypes = {
    subject: PropTypes.object.isRequired,
    subjects: PropTypes.array.isRequired,
    getSubject: PropTypes.func.isRequired,
    deleteSubject: PropTypes.func.isRequired
  };

  componentDidMount() {
    let first = this.props.subjects[0];
    if (first !== undefined) this.props.getSubject(first.id);
  }

  componentDidUpdate(prevProps, prevState) {
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
          onClick={() => this.props.getSubject(subj.id)}
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

  loadArts() {
    let articles = [];

    this.props.subject.article_set.forEach(art => {
      articles.push(<Artigo key={art.id} art={art} />);
    });

    return articles;
  }

  render() {
    const { subject } = this.props;
    return (
      <main className="">
        <div className="flex items-center text-center p-6 border-b shadow-lg overflow-x-auto">
          {this.loadSubj()}
        </div>

        {subject.id === undefined ? null : (
          <div className="my-6">
            <div className="flex text-center">
              <div className="px-4 inline-block w-3/4 text-left h-screen overflow-y-auto">
                <div className="text-center">
                  <h1 className="text-4xl">{this.props.subject.title}</h1>
                </div>
                <div className="">{this.loadArts()}</div>
              </div>
              <div className="inline-block px-2 w-1/4 h-screen overflow-y-auto border-l text-left">
                <JOptionPanel />
              </div>
            </div>
          </div>
        )}
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
