import { INITIALIZE_APP } from '../constants/internal-action-types.const'

const initialState = {
  ready: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, ready: true }

    default:
      return state
  }
}
