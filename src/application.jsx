import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import MainLayout from './components/main-layout.component'

/**
 *  Application
 */
const Application = ({ store }) => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
)

/**
 *  Define Application Prop Types
 */
Application.propTypes = {
  store: PropTypes.object.isRequired,
}

/**
 *  Export Application
 */
export default Application
