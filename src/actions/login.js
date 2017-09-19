import Api from '../api';
import { LOGIN_RECEIVE, LOGIN_ERROR, LOG_OUT } from '../constants';

export const loginReceive = (userData) => ({
  type: LOGIN_RECEIVE,
  user: userData
});

export const loginError = (err) => ({
  type: LOGIN_ERROR,
  error: err
});

export const logOut = (userData) => ({
  type: LOG_OUT,
  user: userData
});

export const loginCheck = () => dispatch => {
  const user = Api.user;
  if (user) {
    dispatch(loginReceive(user));
  }
  return;
};

export const ClearUser = () => dispatch => {
  Api.logout();
  const user = Api.user;
  dispatch(logOut(user));
};

export const loginSend = loginData => dispatch => {
  Api.login(loginData).then(
    (response) => {
      Api.user = response.data;
      dispatch(loginReceive(response.data));
    },
    (error) => {
      try {
        if (error.response.data) {
          dispatch(loginError(error.response.data));
        }
      } catch (e) {
        dispatch(loginError([{
          param: 'alert',
          message: 'CONNECTION_SERVER_ERROR'
        }]));
      }
    }
  );
};

