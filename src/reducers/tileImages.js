import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus'

const initialState = {
  status: dataStatus.INIT,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TILE_IMAGES:
      return {
        data: [],
        status: dataStatus.LOADING
      }
    case actionTypes.LOAD_TILE_IMAGES_ERROR:
      return {
        data: [],
        status: dataStatus.ERROR
      }
    case actionTypes.LOAD_TILE_IMAGES_SUCCESS: {
      const {payload} = action;
      return {
        ...state,
        status: dataStatus.SUCCESS,
        data: payload,
      };
    }
    case actionTypes.RESET_ALL_IMAGES: {
      return initialState;
    }
    default:
      return state;
  }
}
