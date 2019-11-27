import actionTypes from '../constants/action-types'
import {combineReducers} from 'redux'

const data = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_PREDICTION:
    case actionTypes.LOAD_PREDICTION_ERROR:
      return []
    case actionTypes.LOAD_PREDICTION_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PREDICTION:
      return true
    case actionTypes.LOAD_PREDICTION_ERROR:
    case actionTypes.LOAD_PREDICTION_SUCCESS:
      return false
    default:
      return state
  }
}

export default combineReducers({
  data,
  loading
})
