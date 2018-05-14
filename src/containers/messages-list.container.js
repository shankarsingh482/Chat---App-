import { connect } from 'react-redux'

import MessagesList from '../components/messages-list.component'

export default connect(
  state => ({
    messages: Object.keys(state.messages).map(key => state.messages[key]),
  }),
)(MessagesList)
