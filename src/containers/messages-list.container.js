import { connect } from 'react-redux'

import { getActiveUser } from '../selectors/active-user.selectors'
import { getMessagesList } from '../selectors/messages.selectors'

import MessagesList from '../components/messages-list.component'

/**
 *  Messages Container
 */
export default connect(
  state => ({
    activeUser: getActiveUser(state),
    messages: getMessagesList(state),
  }),
)(MessagesList)
