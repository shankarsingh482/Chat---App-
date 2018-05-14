import React from 'react'

import MessagesList from './messages-list.component'
import NewMessageInput from './new-message-input.component'

/**
 *  Main Layout
 */
const MainLayout = () => (
  <div className="wrapper">
    <div className="header">
      <h1>React Redux Chat App</h1>
    </div>
    <aside className="sidebar">
      Sidebar
    </aside>
    <section className="main">
      <MessagesList />
      <NewMessageInput onNewMessage={console.log} />
    </section>
  </div>
)

/**
 *  Export Main Layout
 */
export default MainLayout

