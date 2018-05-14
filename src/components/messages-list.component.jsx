import React from 'react'
import PropTypes from 'prop-types'

/**
 *  Messages List
 */
const MessagesList = ({ messages }) => (
  <ul className="messages-list">
    {messages.map(message => (
      <li key={message.id}>{message.text}</li>
    ))}
  </ul>
)

/**
 *  Define Messages List Prop Types
 */
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired
}

/**
 *  Export Messages List
 */
export default MessagesList
