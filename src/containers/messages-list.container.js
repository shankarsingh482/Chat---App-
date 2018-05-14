import { connect } from 'react-redux'

import MessagesList from '../components/messages-list.component'

export default connect(
  state => ({
    messages: state.messages,
  }),
)(MessagesList)
