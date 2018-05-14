import { UPDATE_USERS_LIST } from '../constants/internal-action-types.const'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS_LIST:
      console.log(action)
      return { ...action.payload.users }

    default:
      return state
  }
}
