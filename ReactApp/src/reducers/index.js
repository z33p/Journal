import { combineReducers } from "redux";
import subject from "./subject";
import articles from "./article";
import auth from "./auth";

export default combineReducers({
  subject,
  articles,
  auth
});
