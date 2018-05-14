import { connect } from 'react-redux'

import createNewMessage from '../actions/create-new-message.action'

import NewMessageInput from '../components/new-message-input.component'

export default connect(
  () => ({}),
  dispatch => ({
    onNewMessage: text => dispatch(createNewMessage({ text })),
  }),
)(NewMessageInput)
