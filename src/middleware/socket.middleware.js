import { CREATE_NEW_MESSAGE } from '../constants/internal-action-types.const'
import { NEW_MESSAGE } from '../constants/socket-server-action-types.const'

import socket from '../socket'

export default store => next => action => {
  if (action.type === CREATE_NEW_MESSAGE) {
    socket.send(JSON.stringify({
      type: NEW_MESSAGE,
      payload: {
        text: action.payload.text,
        userId: action.payload.userId,
      },
    }))
  }

  return next(action)
}
