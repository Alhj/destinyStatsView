import { actionTypes } from '../types/types'

export const setDisplayName = (displayName: string) => {
  const obj: actionTypes = {
    type: 'SETDISPLAYNAME',
    payload: displayName
  }
  return obj;
}
