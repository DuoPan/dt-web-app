import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import region from './region';
// import lineChartOption from './lineChartOption';
import heatmapOption from './heatmapOption';
import tileImages from './tileImages';
import serialNumber from './serialNumber';

const rootReducer = combineReducers({
  routing: routerReducer,
  region,
  // lineChartOption,
  heatmapOption,
  tileImages,
  serialNumber,
})

export default rootReducer
