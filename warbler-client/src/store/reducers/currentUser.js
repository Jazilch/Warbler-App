import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false, // hopefully be true when logged in 
  user: {} // all the user info once logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
      default:
        return state;
  }
};