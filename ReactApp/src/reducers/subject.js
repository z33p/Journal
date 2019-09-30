import {
  GET_SUBJECT,
  CREATE_SUBJECT,
  CREATE_ARTICLES,
  CREATE_SNNIPET
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
      auth.user.subject_name = [
        ...state.auth.user.subject_name,
        action.payload.title
      ];
      auth.user.subject_set = [
        ...state.auth.user.subject_set,
        action.payload.id
      ];
      return {
        subject: state.subject,
        auth
      };

    case CREATE_ARTICLES:
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
      const loadArticles = (payload, article_set) => {
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

    default:
      return state;
  }
}
