import React, { PureComponent } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'

/**
 *  Messages List
 */
export default class extends PureComponent {
  static propTypes = {
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
          'faded',
        ]).isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired
  }

  componentDidMount () {
    this.handleScrollToLastMessage()
  }

  componentDidUpdate () {
    this.handleScrollToLastMessage()
  }

  handleScrollToLastMessage = () => (
    this.listEl.scrollTop = this.listEl.scrollHeight
  )

  render () {
    const { activeUser, messages } = this.props

    return (
      <ul className="messages-list" ref={component => this.listEl = component}>
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
  }
}
