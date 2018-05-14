import { CREATE_NEW_MESSAGE } from '../constants/internal-action-types.const'

export default ({ text }) => ({
  type: CREATE_NEW_MESSAGE,
  payload: {
    text,
  },
})
