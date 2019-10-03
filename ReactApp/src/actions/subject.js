import axios from "axios";
import { tokenConfig } from "./Accounts/auth";
import {
  GET_SUBJECT,
  CREATE_SUBJECT,
  UPDATE_SUBJECT,
  DELETE_SUBJECT
} from "./types";

// GET SUBJECT
export const getSubject = id => (dispatch, getState) => {
  axios
    .get(`/api/subject/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_SUBJECT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// CREATE SUBJECT
export const createSubject = title => (dispatch, getState) => {
  axios
    .post("/api/subject/", { title }, tokenConfig(getState))
    .then(res => {
      // dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: CREATE_SUBJECT,
        payload: res.data
      });
    })
    .catch(
      err => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// UPDATE SUBJECT
export const updateSubject = (id, title) => (dispatch, getState) => {
  axios
    .put(`/api/subject/${id}/`, { title }, tokenConfig(getState))
    .then(res => {
      // dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: UPDATE_SUBJECT,
        payload: res.data
      });
    })
    .catch(
      err => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE SUBJECT
export const deleteSubject = id => (dispatch, getState) => {
  axios
    .delete(`/api/subject/${id}/`, tokenConfig(getState))
    .then(res => {
      // dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: DELETE_SUBJECT,
        payload: id
      });
    })
    .catch(
      err => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};
