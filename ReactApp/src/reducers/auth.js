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
  let subjects;
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
      auth.user.id = action.payload.id;
      auth.user.username = action.payload.username;
      auth.user.email = action.payload.email;

      subjects = [];
      for (const i in action.payload.subject_set) {
        subjects.push({
          id: action.payload.subject_set[i],
          title: action.payload.subject_name[i]
        });
      }
      auth.user.subjects = subjects;

      return {
        subject: state.subject,
        auth
      };

    case LOGIN_SUCCESS:
      auth.isLoading = false;
      localStorage.setItem("token", action.payload.token);
      auth.isAuthenticated = true;
      auth.user.id = action.payload.id;
      auth.user.username = action.payload.username;
      auth.user.email = action.payload.email;

      subjects = [];
      for (const i in action.payload.subject_set) {
        subjects.push({
          id: action.payload.subject_set[i],
          title: action.payload.subject_name[i]
        });
      }
      auth.user.subjects = subjects;
      return {
        subject: state.subject,
        auth
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      auth.token = null;
      auth.user = {
        id: null,
        username: null,
        email: null,
        subjects: []
      };
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
