import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/**
 *  Messages List
 */
const MessagesList = ({ activeUser, messages }) => (
  <ul className="messages-list">
    {messages.map(message => (
      <li
        key={message.id}
        className={classNames('message', {
          'message--my-message': message.userId === activeUser.id,
          'message--normal': message.type === 'normal',
          'message--thinking': message.type === 'thinking',
        })}
      >
        <span className="message-text">{message.text}</span>
      </li>
    ))}
  </ul>
)

/**
 *  Define Messages List Prop Types
 */
MessagesList.propTypes = {
  activeUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf([
        'normal',
        'thinking',
      ]).isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired
}

/**
 *  Export Messages List
 */
export default MessagesList
