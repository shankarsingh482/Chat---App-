import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 *  Counting Message
 */
export default class extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    count: this.props.count,
    message: `${this.props.count}...`,
    renderMessageAsLink: false,
  }

  componentWillMount () {
    this.intervalId = setInterval(this.handleCountdown, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  handleCountdown = () => {
    if (this.state.count > 0) {
      const count = this.state.count - 1

      this.setState({ count, message: `${count}...` })
    } else if (this.state.count === 0) {
      clearInterval(this.intervalId)

      this.setState(
        {
          message: this.props.url,
          renderMessageAsLink: true,
        },
        () => window.open(this.props.url)
      )
    }
  }

  render () {
    return (
      <div className="message-text">
        {this.state.renderMessageAsLink
          ? (
            <a className="message-text" href={this.state.message} target="_blank">
              {this.state.message}
            </a>
          )
          : this.state.message
        }
      </div>
    )
  }
}
