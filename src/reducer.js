import { combineReducers } from 'redux'

import application from './reducers/application.reducer'
import user from './reducers/user.reducer'
import users from './reducers/users.reducer'
import messages from './reducers/messages.reducer'

/**
 *  Create Reducer
 */
const createRootReducer = asyncReducers => (
  combineReducers({
    application,
    user,
    users,
    messages,
    ...asyncReducers,
  })
)

/**
 *  Inject Reducer
 */
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(createRootReducer(store.asyncReducers))
}

/**
 *  Export Reducer
 */
export default createRootReducer()
