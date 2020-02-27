import { actionTypes } from '../types/types';

const displayName = (state = '', action: actionTypes) => {
  switch (action.type) {
    case 'SETDISPLAYNAME':
      state = (action.payload as string);
      return state;
    default:
      return state;
  }
}


export default displayName;