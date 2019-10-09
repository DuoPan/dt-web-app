import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus';

const initialState = {
  status: dataStatus.INIT,
  title: {},
  grid: {},
  tooltip: {},
  xAxis: {},
  yAxis: {},
  series: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_LINE_CHART_OPTION_SUCCESS: {
      const { title, xAxis, series} = action.payload.data;
      return {
        ...state,
        title,
        xAxis,
        series,
        status: dataStatus.SUCCESS,
      };
    }
    default:
      return state;
  }
}
