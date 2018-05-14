import { combineReducers } from 'redux'

import application from './reducers/application.reducer'

/**
 *  Create Reducer
 */
const createRootReducer = asyncReducers => (
  combineReducers({
    application,
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
