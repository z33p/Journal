import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().Auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTH_ERROR });
    });
};

// LOGIN USER
export const login = userAndPassword => dispatch => {
  const config = {
    method: "POST",
    url: "/api/auth/login",
    data: userAndPassword,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios(config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAIL });
    });
};

// LOGOUT USER
export const logout = () => dispatch => {
  axios
    .post("/api/auth/logout/")
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// https://www.youtube.com/watch?v=kfpY5BsIoFg