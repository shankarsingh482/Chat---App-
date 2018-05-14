import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
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
        className={classNames(`message message--${message.type}`, {
          'message--my-message': message.userId === activeUser.id,
        })}
      >
        <CSSTransitionGroup
          transitionName={
            message.userId === activeUser.id
              ? 'slide-in-from-right'
              : 'slide-in-from-left'
          }
          transitionAppear={true}
          transitionAppearTimeout={150}
          transitionEnterTimeout={150}
          transitionLeaveTimeout={150}
        >
          <span className="message-text">
            {message.text}
          </span>
        </CSSTransitionGroup>
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
