import { connect } from 'react-redux'

import setUserTyping from '../actions/set-user-typing.action'
import createNewMessage from '../actions/create-new-message.action'

import NewMessageInput from '../components/new-message-input.component'

/**
 *  New Message Input Container
 */
export default connect(
  () => ({}),
  dispatch => ({
    onType: text => dispatch(setUserTyping({ typing: !!text.length })),
    onNewMessage: text => dispatch(createNewMessage({ text })),
  }),
)(NewMessageInput)
