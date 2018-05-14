import { CREATE_NEW_MESSAGE } from '../constants/internal-action-types.const'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_MESSAGE:
      return [...state, action.payload.text]

    default:
      return state
  }
}
