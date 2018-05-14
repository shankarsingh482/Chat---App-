import { connect } from 'react-redux'

import UsersList from '../components/users-list.component'

export default connect(
  state => ({
    users: Object.keys(state.users).map(key => state.users[key]),
  }),
)(UsersList)
