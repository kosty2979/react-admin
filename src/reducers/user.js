import { LOGIN_RECEIVE, LOGIN_ERROR, LOG_OUT } from '../constants';

const initialState = {
  data: null,
  error: null
};

export default function registration(state = initialState, action) {
  switch (action.type) {

    case LOGIN_RECEIVE: {
      return {
        ...state,
        data: action.user,
        error: null
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        data: action.user,
        error: null
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        data: null,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
}
