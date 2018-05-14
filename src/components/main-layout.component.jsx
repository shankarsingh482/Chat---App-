import React from 'react'
import PropTypes from 'prop-types'

import UsersListContainer from '../containers/users-list.container'
import MessagesListContainer from '../containers/messages-list.container'
import NewMessageInputContainer from '../containers/new-message-input.container'

import LoadingScreen from './loading-screen.component'

/**
 *  Main Layout
 */
const MainLayout = ({ applicationReady }) => (
  applicationReady
    ? (
      <div className="wrapper">
        <div className="header">
          <h1>React Redux Chat App</h1>
        </div>
        <aside className="sidebar">
          <UsersListContainer />
        </aside>
        <section className="main">
          <MessagesListContainer />
          <NewMessageInputContainer />
        </section>
      </div>
    )
    : <LoadingScreen />
)

/**
 *  Define Main Layout Prop Types
 */
MainLayout.propTypes = {
  applicationReady: PropTypes.bool.isRequired,
}

/**
 *  Export Main Layout
 */
export default MainLayout

