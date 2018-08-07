import * as types from './actionTypes';

export function longinUser(user) {
  return {type: types.LOGIN, user};
}

export function logoutUser(user) {
  return { type: types.LOGOUT, user};
}
