import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../actions/Accounts/types";

export default function(state, action) {
  let auth = { ...state.auth };

  switch (action.type) {
    case USER_LOADING:
      auth.isLoading = true;
      return {
        subject: state.subject,
        auth
      };

    case USER_LOADED:
      auth.isLoading = false;
      auth.isAuthenticated = true;
      auth.user = action.payload;

      return {
        subject: state.subject,
        auth
      };

    case LOGIN_SUCCESS:
      auth.isLoading = false;
      localStorage.setItem("token", action.payload.token);
      auth.isAuthenticated = true;
      auth.user = action.payload.user;

      return {
        subject: state.subject,
        auth
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      auth.token = null;
      auth.user = null;
      auth.isAuthenticated = false;
      auth.isLoading = false;
      return {
        subject: state.subject,
        auth
      };

    default:
      return state;
  }
}
