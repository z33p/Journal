import axios from "axios";
import { tokenConfig } from "./Accounts/auth";
import { CREATE_SNNIPET } from "./types";

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
