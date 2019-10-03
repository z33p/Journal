import { combineReducers } from "redux";
import subject from "./subject";
import auth from "./auth";

const initialState = {
  subject: {},
  auth: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: {
      id: null,
      username: null,
      email: null,
      subjects: []
    }
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
