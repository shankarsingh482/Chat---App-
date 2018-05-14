import { INITIALIZE_APP } from '../constants/internal-action-types.const'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, ...action.payload.user }

    default:
      return state
  }
}
