import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus'

const initialState = {
  status: dataStatus.INIT,
  lat: -37.817252,
  lng: 144.947494,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_HEAT_MAP_OPTION_SUCCESS: {
      const { lat, lng } = action.payload.data;
      return {
        ...state,
        status: dataStatus.SUCCESS,
        lat: lat,
        lng: lng,
      };
    }
    default:
      return state;
  }
}
