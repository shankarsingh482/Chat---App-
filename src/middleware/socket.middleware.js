import {
  SET_USER_TYPING,
  CREATE_NEW_MESSAGE,
} from '../constants/internal-action-types.const'

import {
  USER_TYPING,

  NEW_MESSAGE,

  NEW_USER_NAME,
  REMOVE_LAST_MESSAGE,
  FADE_LAST_MESSAGE,
} from '../constants/socket-server-action-types.const'

import socket from '../socket'

const REMOVE_LAST_MESSAGE_COMMAND = '/oops'
const SET_USER_NAME_COMMAND = '/nick '
const NEW_THINKING_MESSAGE_COMMAND = '/think '
const NEW_HIGHLIGHTED_MESSAGE_COMMAND = '/highlight '
const FADE_LAST_MESSAGE_COMMAND = '/fadelast'
const COUNTDOWN_MESSAGE_COMMAND = '/countdown '

/**
 *  Socket Middleware
 */
export default store => next => action => {
  if (action.type === CREATE_NEW_MESSAGE) {
    if (action.payload.text === REMOVE_LAST_MESSAGE_COMMAND) {
      socket.send(JSON.stringify({
        type: REMOVE_LAST_MESSAGE,
        payload: {
          userId: action.payload.userId,
        },
      }))
    } else if (action.payload.text === FADE_LAST_MESSAGE_COMMAND) {
      socket.send(JSON.stringify({
        type: FADE_LAST_MESSAGE,
        payload: {
          userId: action.payload.userId,
        },
      }))
    } else if (action.payload.text.startsWith(SET_USER_NAME_COMMAND)) {
      socket.send(JSON.stringify({
        type: NEW_USER_NAME,
        payload: {
          userId: action.payload.userId,
          userName: action.payload.text.substr(SET_USER_NAME_COMMAND.length),
        },
      }))
    } else if (action.payload.text.startsWith(NEW_THINKING_MESSAGE_COMMAND)) {
      socket.send(JSON.stringify({
        type: NEW_MESSAGE,
        payload: {
          text: action.payload.text.substr(NEW_THINKING_MESSAGE_COMMAND.length),
          type: 'thinking',
          time: action.payload.time,
          userId: action.payload.userId,
        },
      }))
    } else if (action.payload.text.startsWith(NEW_HIGHLIGHTED_MESSAGE_COMMAND)) {
      socket.send(JSON.stringify({
        type: NEW_MESSAGE,
        payload: {
          text: action.payload.text.substr(NEW_HIGHLIGHTED_MESSAGE_COMMAND.length),
          type: 'highlighted',
          time: action.payload.time,
          userId: action.payload.userId,
        },
      }))
    } else if (action.payload.text.startsWith(COUNTDOWN_MESSAGE_COMMAND)) {
      socket.send(JSON.stringify({
        type: NEW_MESSAGE,
        payload: {
          text: action.payload.text.substr(COUNTDOWN_MESSAGE_COMMAND.length),
          count: 5,
          type: 'countdown',
          time: action.payload.time,
          userId: action.payload.userId,
        },
      }))
    } else {
      socket.send(JSON.stringify({
        type: NEW_MESSAGE,
        payload: {
          text: action.payload.text,
          type: 'normal',
          time: action.payload.time,
          userId: action.payload.userId,
        },
      }))
    }
  }

  if (action.type === SET_USER_TYPING) {
    socket.send(JSON.stringify({
      type: USER_TYPING,
      payload: {
        userId: action.payload.userId,
        typing: action.payload.typing,
      },
    }))
  }

  return next(action)
}
