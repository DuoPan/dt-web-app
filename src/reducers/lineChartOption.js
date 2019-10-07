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
    case actionTypes.LOAD_LINE_CHART_OPTION: {
      // text paylod
      const { title, xAxis, series} = {
        title: {
          text: 'ECharts with React'
        },
        grid: {
          show: false
        },
        tooltip: {},
        xAxis: {
          data: ["1990","1991","1992","1993","1994","1995"]
        },
        yAxis: {},
        series: [{
          name: 'Test',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };
      // const { title, xAxis, series} = action.payload;
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
