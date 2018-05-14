import { createElement } from 'react'
import { render } from 'react-dom'

import Application from './application'

/**
 *  Render App
 */
render(
  createElement(Application),
  document.getElementById('root'),
)
