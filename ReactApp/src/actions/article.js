import axios from "axios";
import { tokenConfig } from "./Accounts/auth";
import {
  CREATE_ARTICLE,
  PATCH_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "./types";

// CREATE ARTICLE
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
        type: CREATE_ARTICLE,
        payload: res.data
      });
    })
    .catch(
      err => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// PATCH ARTICLE
export const patchArticle = (id, title, description) => (
  dispatch,
  getState
) => {
  axios
    .patch(`/api/article/${id}/`, { title, description }, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: PATCH_ARTICLE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE ARTICLE
export const deleteArticle = id => (dispatch, getState) => {
  axios
    .patch(`/api/article/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: DELETE_ARTICLE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
