import 'whatwg-fetch'
import * as api from 'api'
import aTypes from '../constants/action-types'
import { createAction } from 'redux-actions'

export const demoAction = createAction(aTypes.DEMO_ACTION, data => data)

export const sendDemoRequest = (imgFile, param) => {
  return {
    types: [
      aTypes.DEMO_REQUEST,
      aTypes.DEMO_REQUEST_SUCCESS,
      aTypes.DEMO_REQUEST_ERROR
    ],
    callAPI: async store => {
      const resp = await api.demoApi()

      return resp
    },
    errorHandler: e => {
      window.alert('error')
    }
  }
}

export const selectRegion = createAction(aTypes.SELECT_REGION, data => data);

export const selectSerialNumber = createAction(aTypes.SELECT_SERIAL_NUMBER, data => data);

export const resetAllImages = createAction(aTypes.RESET_ALL_IMAGES);

export const clickHeatmap = createAction(aTypes.CLICK_HEAT_MAP);


export const loadLineChartOption = (geoJson) => {
  return {
    types: [
      aTypes.LOAD_LINE_CHART_OPTION,
      aTypes.LOAD_LINE_CHART_OPTION_SUCCESS,
      aTypes.LOAD_LINE_CHART_OPTION_ERROR,
    ],
    callAPI: async store => {
      const resp = await api.loadLineChartOptionApi(geoJson)
      return resp
    },
    errorHandler: e => {
      window.alert('error')
    }
  }
}

export const loadHeatmapOption = (geoJson) => {
  return {
    types: [
      aTypes.LOAD_HEAT_MAP_OPTION,
      aTypes.LOAD_HEAT_MAP_OPTION_SUCCESS,
      aTypes.LOAD_HEAT_MAP_OPTION_ERROR,
    ],
    callAPI: async store => {
      const resp = await api.loadHeatmapOptionApi(geoJson);
      return resp
    },
    errorHandler: e => {
      window.alert('error')
    }
  }
}

export const loadTileImages = (geoJson) => {
  return {
    types: [
      aTypes.LOAD_TILE_IMAGES,
      aTypes.LOAD_TILE_IMAGES_SUCCESS,
      aTypes.LOAD_TILE_IMAGES_ERROR,
    ],
    callAPI: async store => {
      const resp = await api.loadTileImagesApi(geoJson);
      return resp
    },
    errorHandler: e => {
      window.alert('error')
    }
  }
}