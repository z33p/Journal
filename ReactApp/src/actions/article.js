import axios from "axios";
import { tokenConfig } from "./Accounts/auth";
import { GET_ARTICLES, CREATE_ARTICLES } from "./types";

// GET SUBJECT
export const getArticles = () => dispatch => {
  axios
    .get("/api/article/")
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// CREATE LEAD
export const createArticle = (title, description, subject) => (
  dispatch,
  getState
) => {
  axios
    .post(
      "/api/article/",
      { title, description, subject },
      tokenConfig(getState)
    )
    .then(res => {
      // dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: CREATE_ARTICLES,
        payload: res.data
      });
    })
    .catch(
      err => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};
