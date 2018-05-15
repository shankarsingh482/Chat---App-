import { INITIALIZE_APP, UPDATE_MESSAGES_LIST } from '../constants/internal-action-types.const'

/**
 *  Messages Initial State
 */
const initialState = {}

/**
 *  Messages Reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
    case UPDATE_MESSAGES_LIST:
      return { ...action.payload.messages }

    default:
      return state
  }
}
