const WebSocket = require('ws')

const { SOCKET_SERVER_PORT } = require('./configuration')

const server = new WebSocket.Server({ port: SOCKET_SERVER_PORT })

server.on('connection', ws => {
  console.log('Connection opened...')

  ws.on('message', message => {
    console.log(message)
  })

  ws.on('close', () => {
    console.log('Connection closed...')
  })
})

console.log(`Socket server running on port ${SOCKET_SERVER_PORT}`)
