import { createStore, compose, applyMiddleware } from 'redux'

import messageEnricherMiddleware from './middleware/message-enricher.middleware'
import socketMiddleware from './middleware/socket.middleware'

import reducer from './reducer'

/**
 *  Initial State
 */
const initialState = {}

/**
 *  Middleware
 */
const middleware = [messageEnricherMiddleware, socketMiddleware]

/**
 *  Enhancers
 */
const enhancers = []

/**
 *  Compose Enhancers
 */
let composeEnhancers = compose

/**
 *  Setup Redux DevTools
 */
if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window
  if (typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
}

/**
 *  Store
 */
export default createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
)
