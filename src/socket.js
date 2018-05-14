import { SOCKET_SERVER_HOST, SOCKET_SERVER_PORT } from './configuration'

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
  console.log(JSON.parse(data))
}

/**
 *  Export Socket
 */
export default socket
