import { SOCKET_SERVER_HOST, SOCKET_SERVER_PORT } from './configuration'

import { USERS_LIST_UPDATED } from './constants/socket-server-action-types.const'

import updateUsersList from './actions/update-users-list.action'

import store from './store'

/**
 *  Socket
 */
const socket = new WebSocket(`ws://${SOCKET_SERVER_HOST}:${SOCKET_SERVER_PORT}`)

/**
 *  Handle Socket Connection
 */
socket.onopen = () => {
  console.log('Socket ready...')
}

/**
 *  Handle Socket Messages
 */
socket.onmessage = ({ data }) => {
  const action = JSON.parse(data)

  switch (action.type) {
    case USERS_LIST_UPDATED:
      store.dispatch(updateUsersList(action.payload))
      break

    default:
      console.log('Unknown action:', action)
  }
}

/**
 *  Export Socket
 */
export default socket
