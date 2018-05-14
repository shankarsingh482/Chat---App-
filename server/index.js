const WebSocket = require('ws')

const { SOCKET_SERVER_PORT } = require('./configuration')

const {
  USER_CONNECTED,
  USERS_LIST_UPDATED,

  NEW_MESSAGE,

  NEW_MESSAGE_RECEIVED,
  MESSAGES_LIST_UPDATED,
} = require('./constants/action-types.const')

/**
 *  WebSocket Server
 */
const server = new WebSocket.Server({ port: SOCKET_SERVER_PORT })

/**
 *  Users Store
 */
let userId = 0
const users = {}

/**
 *  Messages Store
 */
let messageId = 0
const messages = {}

/**
 *  Handle Socket Connection
 */
server.on('connection', ws => {
  const connectedUserId = userId++

  users[connectedUserId] = {
    id: connectedUserId,
    name: `User ${connectedUserId}`,
  }

  broadcastToSelf({
    type: USER_CONNECTED,
    payload: {
      user: users[connectedUserId],
      users,
      messages,
    },
  }, ws)

  broadcastToOthers({
    type: USERS_LIST_UPDATED,
    payload: {
      users,
    },
  }, ws)

  console.log('User Connected')
  console.log('User:', users[connectedUserId])
  console.log('Users:', users)

  /**
   *  Handle Socket Communication
   */
  ws.on('message', message => {
    const action = JSON.parse(message)

    switch (action.type) {
      case NEW_MESSAGE: {
        const newMessageId = messageId++

        messages[newMessageId] = {
          id: newMessageId,
          text: action.payload.text,
        }

        broadcastToSelf({
          type: NEW_MESSAGE_RECEIVED,
          payload: {
            message: messages[newMessageId],
            messages,
          },
        }, ws)

        broadcastToOthers({
          type: MESSAGES_LIST_UPDATED,
          payload: {
            messages,
          },
        }, ws)

        console.log('Message Received')
        console.log('Message:', messages[newMessageId])
        console.log('Messages:', messages)

        break
      }

      default:
        console.log('Unknown action:', action)
    }
  })

  ws.on('close', () => {
    const disconnectedUser = users[connectedUserId]

    delete users[connectedUserId]

    broadcastToOthers({
      type: USERS_LIST_UPDATED,
      payload: {
        users,
      },
    }, ws)

    console.log('User Disconnected')
    console.log('User:', disconnectedUser)
    console.log('Users:', users)
  })
})

const broadcastToSelf = (action, ws) => {
  ws.send(JSON.stringify(action))
}

const broadcastToOthers = (action, ws) => {
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(action))
    }
  })
}

/**
 *  Log: Server Running...
 */
console.log(`Socket server running on port ${SOCKET_SERVER_PORT}`)
