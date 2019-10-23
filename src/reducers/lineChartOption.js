import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus';

const initialState = {
  status: dataStatus.INIT,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_LINE_CHART_OPTION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        status: dataStatus.SUCCESS,
        data: data,
      };
    }
    case actionTypes.RESET_ALL_IMAGES: {
      return initialState;
    }
    default:
      return state;
  }
}
