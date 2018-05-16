import React, { PureComponent } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CountdownMessage from './countdown-message.component'

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
          'highlighted',
          'countdown',
        ]).isRequired,
        time: PropTypes.string.isRequired,
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
    this.listWrapperEl.scrollTop = this.listWrapperEl.scrollHeight
  )

  renderCountdownMessage = (message, activeUser) => {
    return message.userId === activeUser.id
      ? <a className="message-text" href={message.text} target="_blank">{message.text}</a>
      : <CountdownMessage count={message.count} url={message.text} />
  }

  render () {
    const { activeUser, messages } = this.props

    return (
      <div className="messages-list-wrapper" ref={component => this.listWrapperEl = component}>
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
                {message.type === 'countdown'
                  ? this.renderCountdownMessage(message, activeUser)
                  : <span className="message-text">{message.text}</span>
                }
                <span className="message-time">{message.time}</span>
              </CSSTransitionGroup>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
