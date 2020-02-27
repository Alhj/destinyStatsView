import { actionTypes } from '../types/types'

export const setDisplayName = (displayName: string) => {
  const obj: actionTypes = {
    type: 'SETDISPLAYNAME',
    payload: displayName
  }
  return obj;
}

export const setWindowSize = (size: number) => {
  const obj: actionTypes = {
    type: 'SETWINDOWSIZE',
    payload: size
  }
  return obj;
}
