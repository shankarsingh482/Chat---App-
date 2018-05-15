import { connect } from 'react-redux'

import { getActiveUser } from '../selectors/active-user.selectors'
import { getUsersList } from '../selectors/users.selectors'

import UsersList from '../components/users-list.component'

/**
 *  Users List Container
 */
export default connect(
  state => ({
    activeUser: getActiveUser(state),
    users: getUsersList(state),
  }),
)(UsersList)
