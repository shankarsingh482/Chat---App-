import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 *  New Message Input
 */
export default class extends PureComponent {
  static propTypes = {
    onNewMessage: PropTypes.func.isRequired,
  }

  state = {
    message: '',
  }

  handleMessageChangeEvent = event => {
    this.setState({ message: event.target.value })
  }

  handleMessageSendEvent = event => {
    event.preventDefault()

    this.props.onNewMessage(this.state.message)
    this.setState({ message: '' })
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
          value={this.state.message}
          onChange={this.handleMessageChangeEvent}
          onKeyPress={this.handleMessageKeyPressEvent}
        />
      </div>
    )
  }
}
