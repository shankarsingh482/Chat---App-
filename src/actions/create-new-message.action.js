import { CREATE_NEW_MESSAGE } from '../constants/action-types.const'

export default ({ text }) => ({
  type: CREATE_NEW_MESSAGE,
  payload: {
    text,
  },
})
