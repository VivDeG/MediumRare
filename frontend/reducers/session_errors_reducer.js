import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

const _defaultState = [];

const sessionErrorsReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _defaultState;
    case CLEAR_SESSION_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;