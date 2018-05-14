import { UPDATE_USERS_LIST } from '../constants/internal-action-types.const'

export default ({ users }) => ({
  type: UPDATE_USERS_LIST,
  payload: {
    users,
  },
})
