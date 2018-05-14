import { INITIALIZE_APP } from '../constants/internal-action-types.const'

export default ({ user, users, messages }) => ({
  type: INITIALIZE_APP,
  payload: {
    user,
    users,
    messages,
  },
})
