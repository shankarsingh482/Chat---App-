import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 *  New Message Input
 */
export default class extends PureComponent {
  static propTypes = {
    onType: PropTypes.func.isRequired,
    onNewMessage: PropTypes.func.isRequired,
  }

  state = {
    message: '',
  }

  setMessageText = messageText => {
    this.setState(
      { message: messageText },
      () => this.props.onType(this.state.message),
    )
  }

  handleMessageChangeEvent = event => {
    this.setMessageText(event.target.value)
  }

  handleMessageSendEvent = event => {
    event.preventDefault()

    this.props.onNewMessage(this.state.message)
    this.setMessageText('')
  }

  handleMessageKeyPressEvent = event => {
    if (event.key === 'Enter') {
      this.handleMessageSendEvent(event)
    }
  }

  render () {
    return (
      <div className="new-message-input">
        <textarea
          placeholder="Start typing..."
          autoFocus={true}
          value={this.state.message}
          onChange={this.handleMessageChangeEvent}
          onKeyPress={this.handleMessageKeyPressEvent}
        />
      </div>
    )
  }
}
