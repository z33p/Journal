import { GET_SNNIPETS, CREATE_SNNIPETS } from "../actions/types.js";

const initialState = {
  snnipets: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SNNIPETS:
      return {
        ...state,
        articles: action.payload
      };

    default:
      return state;
  }
}
