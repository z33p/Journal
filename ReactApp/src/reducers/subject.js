import {
  GET_SUBJECT,
  CREATE_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT,
  CREATE_ARTICLE,
  PATCH_ARTICLE,
  CREATE_SNNIPET,
  PUT_SNNIPET
} from "../actions/types.js";

export default function(state, action) {
  let auth = { ...state.auth };

  switch (action.type) {
    case GET_SUBJECT:
      return {
        subject: action.payload,
        auth: state.auth
      };

    case CREATE_SUBJECT:
      let subject = {
        id: action.payload.id,
        title: action.payload.title
      };
      auth.user.subjects = [...auth.user.subjects, subject];
      return {
        subject: state.subject,
        auth
      };

    case DELETE_SUBJECT:
      let index = 0;
      // the payload is just a id of the deleted obj
      while (action.payload !== auth.user.subjects[index].id) index++;
      let subjects = [...auth.user.subjects];
      subjects.splice(index, 1);
      auth.user.subjects = subjects;
      return {
        subject: state.subject,
        auth
      };

    case CREATE_ARTICLE:
      return {
        subject: {
          id: state.subject.id,
          article_set: [...state.subject.article_set, action.payload],
          title: state.subject.title,
          created_at: state.subject.created_at
        },
        auth: state.auth
      };

    case CREATE_SNNIPET:
      const loadArticles = payload => {
        let articles = [];
        const id = payload.article;

        state.subject.article_set.forEach(art => {
          if (art.id === id) art.snnipet_set = [...art.snnipet_set, payload];

          articles.push(art);
        });

        return articles;
      };
      return {
        subject: {
          id: state.subject.id,
          // when the page is loading it's possible the subject is undefined triggering an error
          article_set: loadArticles(action.payload, state.subject.article_set),
          title: state.subject.title,
          created_at: state.subject.created_at
        },
        auth: state.auth
      };

    case PATCH_ARTICLE:
      let article_set = state.subject.article_set;
      let i = 0;
      while (article_set[i].id !== action.payload.id) i++;
      article_set[i] = action.payload;

      return {
        auth: state.auth,
        subject: {
          id: state.subject.id,
          article_set: article_set,
          title: state.subject.title,
          created_at: state.subject.created_at
        },
        auth: state.auth
      };

    default:
      return state;
  }
}
