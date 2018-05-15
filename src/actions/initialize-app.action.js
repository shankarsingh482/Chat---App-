import { INITIALIZE_APP } from '../constants/internal-action-types.const'

export default ({ activeUser, users, messages }) => ({
  type: INITIALIZE_APP,
  payload: {
    activeUser,
    users,
    messages,
  },
})
