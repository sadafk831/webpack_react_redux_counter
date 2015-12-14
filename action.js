/**
 * Created by sadafkhan on 14/12/15.
 */

export const INCREMENT_VALUE = 'INCREMENT_VALUE'
export const DECREMENT_VALUE = 'DECREMENT_VALUE'

export function increment(){
  return {
    type : INCREMENT_VALUE
  }
}
export function decrement(){
  return {
    type : DECREMENT_VALUE
  }
}