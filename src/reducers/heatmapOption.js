import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus'

const initialState = {
  status: dataStatus.INIT,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_HEAT_MAP_OPTION_SUCCESS: {
      const { data } = action.payload;
      let _data = [];
      data.forEach(function (elem) {
        _data.push(elem.heatmap.map(function (item) {
          return [item[1], item[0], item[2] || '-'];
        }))
      });
      return {
        ...state,
        status: dataStatus.SUCCESS,
        data: _data,
      };
    }
    case actionTypes.RESET_ALL_IMAGES: {
      return initialState;
    }
    default:
      return state;
  }
}
