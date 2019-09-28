import { GET_ARTICLES, CREATE_ARTICLES } from "../actions/types.js";

const initialState = {
  articles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };

    case CREATE_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };

    default:
      return state;
  }
}
