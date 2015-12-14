/**
 * Created by sadafkhan on 15/12/15.
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import component from './component'
import * as CounterActions from "./action"

function mapStateToProps(state) {
  return {
    counter: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
