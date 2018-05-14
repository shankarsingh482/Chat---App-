const WebSocket = require('ws')

const { SOCKET_SERVER_PORT } = require('./configuration')
const { USERS_LIST_UPDATED } = require('./constants/action-types.const')

/**
 *  WebSocket Server
 */
const server = new WebSocket.Server({ port: SOCKET_SERVER_PORT })

/**
 *  Users
 */
let userId = 0
const users = {}

/**
 *  Handle Socket Connection
 */
server.on('connection', ws => {
  const connectedUserId = userId++

  users[connectedUserId] = {
    id: connectedUserId,
    name: `User ${connectedUserId}`,
  }

  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: USERS_LIST_UPDATED,
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
    delete users[connectedUserId]

    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: USERS_LIST_UPDATED,
          payload: {
            users,
          },
        }))
      }
    })
  })
})

/**
 *  Log: Server Running...
 */
console.log(`Socket server running on port ${SOCKET_SERVER_PORT}`)
