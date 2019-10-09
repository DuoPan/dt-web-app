import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import region from './region';
import lineChartOption from './lineChartOption';
import heatmapOption from './heatmapOption';

const rootReducer = combineReducers({
  routing: routerReducer,
  region,
  lineChartOption,
  heatmapOption,
})

export default rootReducer
