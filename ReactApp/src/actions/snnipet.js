import axios from "axios";
import { tokenConfig } from "./Accounts/auth";
import { GET_SNNIPETS, CREATE_SNNIPET } from "./types";

// GET SNNIPET
export const getSnippets = () => dispatch => {
  axios
    .get("/api/snnipet/")
    .then(res => {
      dispatch({
        type: GET_SNNIPETS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// CREATE SNNIPET
export const createSnnipet = (title, content, tag, article) => (
  dispatch,
  getState
) => {
  axios
    .post(
      "/api/snnipet/",
      { title, content, tag, article },
      tokenConfig(getState)
    )
    .then(res => {
      // dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: CREATE_SNNIPET,
        payload: res.data
      });
    })
    .catch(
      err => console.log(err)
      // dispatch(returnErrors(err.response.data, err.response.status))
    );
};
