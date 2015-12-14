/**
 * Created by sadafkhan on 14/12/15.
 */

import { createStore } from 'redux'
import counterReducer from './reducer'
let store = createStore(counterReducer)

export default store

