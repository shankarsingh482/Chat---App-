import { connect } from 'react-redux'

import { getApplicationReadyState } from '../selectors/application.selectors'

import MainLayout from '../components/main-layout.component'

/**
 *  Application Container
 */
export default connect(
  state => ({
    applicationReady: getApplicationReadyState(state),
  }),
)(MainLayout)
