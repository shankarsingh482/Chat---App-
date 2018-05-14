import React from 'react'

import MessagesListContainer from '../containers/messages-list.container'
import NewMessageInputContainer from '../containers/new-message-input.container'

import UsersList from './users-list.component'

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
      <MessagesListContainer />
      <NewMessageInputContainer />
    </section>
  </div>
)

/**
 *  Export Main Layout
 */
export default MainLayout

