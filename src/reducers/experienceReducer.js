import { RECEIVE_EXPERIENCE } from '../actions/actionTypes'

export default function experienceReducer(state = [], action) {
  switch (action.type) {
    case `${RECEIVE_EXPERIENCE}_FULFILLED`:
      return [...action.payload]
    default:
      return state
  }
}
