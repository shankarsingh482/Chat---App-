const WebSocket = require('ws')

const { SOCKET_SERVER_PORT } = require('./configuration')

const { USER_CONNECTED } = require('./constants/action-types.const')

const server = new WebSocket.Server({ port: SOCKET_SERVER_PORT })

let userId = 0
const users = {}

server.on('connection', ws => {
  const connectedUserId = userId++

  users[connectedUserId] = {
    id: connectedUserId,
    name: `User ${connectedUserId}`,
  }

  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: USER_CONNECTED,
        payload: {
          users,
        },
      }))
    }
  })

  ws.on('message', message => {
    console.log(message)
  })

  ws.on('close', () => {
    console.log('Connection closed...')
  })
})

console.log(`Socket server running on port ${SOCKET_SERVER_PORT}`)
