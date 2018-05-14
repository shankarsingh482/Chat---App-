import React from 'react'
import PropTypes from 'prop-types'

/**
 *  Messages List
 */
const MessagesList = ({ messages }) => (
  <ul className="messages-list">
    {messages.map((message, messageIndex) => (
      <li key={messageIndex}>{message}</li>
    ))}
  </ul>
)

/**
 *  Messages List - Prop Types
 */
MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired
}

/**
 *  Export Messages List
 */
export default MessagesList
