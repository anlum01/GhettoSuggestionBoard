import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function registerReducer(state = initialState.invalidCredentialsAlert, action) {
  switch(action.type) {
    case types.CREDENTIALS_INVALID:
      return true;
    default:
      return false;
  }
}
