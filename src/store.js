import { createStore, compose, applyMiddleware } from 'redux'

import reducer from './reducer'

/**
 *  Initial State
 */
const initialState = {}

/**
 *  Middleware
 */
const middleware = []

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
 *  Create Store
 */
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
)

/**
 *  Prepare Async Reducers
 */
store.asyncReducers = {}

/**
 *  Export Store
 */
export default store
