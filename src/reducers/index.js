import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import region from './region';
import lineChartOption from './lineChartOption';

const rootReducer = combineReducers({
  routing: routerReducer,
  region,
  lineChartOption,
})

export default rootReducer
