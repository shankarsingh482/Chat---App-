import { connect } from 'react-redux'

import MainLayout from '../components/main-layout.component'

export default connect(
  state => ({
    applicationReady: state.application.ready,
  }),
)(MainLayout)
