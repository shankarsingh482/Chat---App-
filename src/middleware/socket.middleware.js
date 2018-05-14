import { CREATE_NEW_MESSAGE } from '../constants/action-types.const'

import socket from '../socket'

export default store => next => action => {
  if (action.type === CREATE_NEW_MESSAGE) {
    socket.send(action.payload.text)
  }

  return next(action)
}
