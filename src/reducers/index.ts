import { combineReducers } from 'redux';
import displayName from './displayName';


const allReducers = combineReducers({
  displayName: displayName
})


export default allReducers;