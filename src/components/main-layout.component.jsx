import React from 'react'

import UsersListContainer from '../containers/users-list.container'
import MessagesListContainer from '../containers/messages-list.container'
import NewMessageInputContainer from '../containers/new-message-input.container'

/**
 *  Main Layout
 */
const MainLayout = () => (
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

/**
 *  Export Main Layout
 */
export default MainLayout

