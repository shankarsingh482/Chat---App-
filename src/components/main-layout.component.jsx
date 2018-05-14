import React from 'react'

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
      <div className="messages-list">
        Messages List
      </div>
      <div className="new-message-input">
        New Message Input
      </div>
    </section>
  </div>
)

/**
 *  Export Main Layout
 */
export default MainLayout

