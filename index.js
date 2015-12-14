/**
 * Created by sadafkhan on 14/12/15.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Hello from './counter'

ReactDOM.render(
    <Provider store={store}>
      <Hello/>
    </Provider>,
    document.getElementById('container')
);