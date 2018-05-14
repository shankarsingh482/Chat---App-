import { INITIALIZE_APP } from '../constants/internal-action-types.const'

const initialState = {
  initialized: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_APP:
      return { ...state, initialized: true }

    default:
      return state
  }
}
