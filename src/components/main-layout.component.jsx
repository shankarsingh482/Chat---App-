import React from 'react'

import NewMessageInputContainer from '../containers/new-message-input.container'

import UsersList from './users-list.component'
import MessagesList from './messages-list.component'

/**
 *  Main Layout
 */
const MainLayout = () => (
  <div className="wrapper">
    <div className="header">
      <h1>React Redux Chat App</h1>
    </div>
    <aside className="sidebar">
      <UsersList />
    </aside>
    <section className="main">
      <MessagesList />
      <NewMessageInputContainer />
    </section>
  </div>
)

/**
 *  Export Main Layout
 */
export default MainLayout

