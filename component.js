/**
 * Created by sadafkhan on 14/12/15.
 */

import React, { Component, PropTypes } from 'react'
import store from './store'

var Hello = React.createClass({
  render: function() {
    console.log(this.props);
    const { increment, decrement, counter } = this.props
    return (
        <div>
          <div>{counter}</div>
          <div onClick={increment}>increment</div>
          <div onClick={decrement}>decrement</div>
        </div>
    );
  }
});

export default Hello;
