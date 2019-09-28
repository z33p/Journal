import axios from "axios";
import { tokenConfig } from "./Accounts/auth";
import { GET_SUBJECT, CREATE_SUBJECT } from "./types";

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

// CREATE LEAD
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
