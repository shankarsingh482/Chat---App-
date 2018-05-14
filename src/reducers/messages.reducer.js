import { CREATE_NEW_MESSAGE } from '../constants/action-types.const'

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_MESSAGE:
      return [...state, action.payload.text]

    default:
      return state
  }
}
