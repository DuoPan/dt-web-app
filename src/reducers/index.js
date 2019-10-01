import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import region from './region';

const rootReducer = combineReducers({
  routing: routerReducer,
  region,
})

export default rootReducer
