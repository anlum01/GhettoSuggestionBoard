import {combineReducers} from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  firbase: firebaseReducer,
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
