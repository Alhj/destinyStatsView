import { combineReducers } from 'redux';
import displayName from './displayName';
import windowSize from './windowSize';

const allReducers = combineReducers({
  displayName: displayName,
  windowSize:windowSize
})


export default allReducers;