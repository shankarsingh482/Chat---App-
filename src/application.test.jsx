import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import Application from './application'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Application store={store} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
