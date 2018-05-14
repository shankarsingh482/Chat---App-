import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import ApplicationContainer from './containers/application.container'

/**
 *  Application
 */
const Application = ({ store }) => (
  <Provider store={store}>
    <ApplicationContainer />
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
