const WebSocket = require('ws')
const R = require('ramda')

const { SOCKET_SERVER_PORT } = require('./configuration')

const {
  USER_CONNECTED,
  USER_TYPING,
  USERS_LIST_UPDATED,

  NEW_MESSAGE,

  NEW_MESSAGE_RECEIVED,
  MESSAGES_LIST_UPDATED,

  NEW_USER_NAME,
  REMOVE_LAST_MESSAGE,
  FADE_LAST_MESSAGE,
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
 *  Helpers
 */
const findLastMessageByUserId = (messagesArray, userId) => (
  R.findLast(R.propEq('userId', userId))(messagesArray)
)


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
      case USER_TYPING: {
        users[action.payload.userId] = {
          ...users[action.payload.userId],
          typing: action.payload.typing,
        }

        broadcastToOthers({
          type: USERS_LIST_UPDATED,
          payload: {
            users,
          },
        })

        console.log('User Typing')
        console.log('User:', users[action.payload.userId])
        console.log('Users:', users)

        break
      }

      case NEW_MESSAGE: {
        const newMessageId = messageId++

        messages[newMessageId] = {
          id: newMessageId,
          type: action.payload.type,
          text: action.payload.text,
          userId: action.payload.userId,
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

      case NEW_USER_NAME: {
        users[action.payload.userId] = {
          ...users[action.payload.userId],
          name: action.payload.userName,
        }

        broadcastToAll({
          type: USERS_LIST_UPDATED,
          payload: {
            users,
          },
        })

        console.log('User Name Updated')
        console.log('User:', users[action.payload.userId])
        console.log('Users:', users)

        break
      }

      case REMOVE_LAST_MESSAGE: {
        const messagesArray = Object.keys(messages).map(key => messages[key])
        const lastMessage = findLastMessageByUserId(messagesArray, action.payload.userId)

        if (lastMessage) {
          delete messages[lastMessage.id]

          broadcastToAll({
            type: MESSAGES_LIST_UPDATED,
            payload: {
              messages,
            },
          })

          console.log('Message Removed')
          console.log('Message:', lastMessage)
          console.log('Messages:', messages)
        }

        break
      }

      case FADE_LAST_MESSAGE: {
        const messagesArray = Object.keys(messages).map(key => messages[key])
        const lastMessage = findLastMessageByUserId(messagesArray, action.payload.userId)

        if (lastMessage) {
          messages[lastMessage.id].type = 'faded'

          broadcastToAll({
            type: MESSAGES_LIST_UPDATED,
            payload: {
              messages,
            },
          })

          console.log('Message Faded')
          console.log('Message:', messages[lastMessage.id])
          console.log('Messages:', messages)
        }

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

const broadcastToAll = action => {
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(action))
    }
  })
}

/**
 *  Log: Server Running...
 */
console.log(`Socket server running on port ${SOCKET_SERVER_PORT}`)
