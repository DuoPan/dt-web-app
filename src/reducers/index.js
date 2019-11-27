import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import region from './region'
import heatmapOption from './heatmapOption'
import tileImages from './tileImages'
import serialNumber from './serialNumber'
import prediction from './prediction'

const rootReducer = combineReducers({
  routing: routerReducer,
  region,
  prediction,
  heatmapOption,
  tileImages,
  serialNumber
})

export default rootReducer
