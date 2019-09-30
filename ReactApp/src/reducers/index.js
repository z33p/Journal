import { combineReducers } from "redux";
import subject from "./subject";
import articles from "./article";
import snnipets from "./snnipet";
import auth from "./auth";

const initialState = {
  subject: {},
  auth: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
  }
};

function reducers(state = initialState, action) {
  let response;
  response = subject(state, action);
  if (response !== state) return response;

  return auth(state, action);
}

export default combineReducers({
  reducers
});
