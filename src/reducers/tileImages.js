import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus'

const initialState = {
  status: dataStatus.INIT,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TILE_IMAGES_SUCCESS: {
      const {data} = action.payload;
      return {
        ...state,
        status: dataStatus.SUCCESS,
        data: data,
      };
    }
    default:
      return state;
  }
}
