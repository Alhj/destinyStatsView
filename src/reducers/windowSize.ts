import { actionTypes } from '../types/types';

const windowSize = (state = 0, action: actionTypes) => {
  switch (action.type) {
    case 'SETWINDOWSIZE':
      state = (action.payload as number);
      return state;
    default:
      return state
  }
}

export default windowSize;