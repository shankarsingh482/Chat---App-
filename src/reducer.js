import { combineReducers } from 'redux'

import application from './reducers/application.reducer'
import activeUser from './reducers/active-user.reducer'
import users from './reducers/users.reducer'
import messages from './reducers/messages.reducer'

/**
 *  Root Reducer
 */
export default combineReducers({
  application,
  activeUser,
  users,
  messages,
})
