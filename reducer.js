/**
 * Created by sadafkhan on 14/12/15.
 */

import {INCREMENT_VALUE,DECREMENT_VALUE} from "./action"

const startValue =0

export default function counter(state, action){
  console.log('in reducer');
  if (typeof state === 'undefined') {
    return startValue
  }
  switch (action.type) {
    case INCREMENT_VALUE:
      return state + 1
    case DECREMENT_VALUE:
      return state - 1
    default:
      return state
  }
}