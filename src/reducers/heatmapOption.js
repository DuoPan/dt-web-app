import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus'

const initialState = {
  status: dataStatus.INIT,
  data: [],
  clickedX: -1,
  clickedY: -1,
};

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case actionTypes.LOAD_HEAT_MAP_OPTION_SUCCESS: {
//       const { data } = action.payload;
//       let _data = [];
//       data.forEach(function (elem) {
//         _data.push(elem.heatmap.map(function (item) {
//           return [item[1], item[0], item[2] || '-'];
//         }))
//       });
//       return {
//         ...state,
//         status: dataStatus.SUCCESS,
//         data: _data,
//       };
//     }
//     case actionTypes.RESET_ALL_IMAGES: {
//       return initialState;
//     }
//     default:
//       return state;
//   }
// }

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_HEAT_MAP_OPTION:
      return {
        data: [],
        status: dataStatus.LOADING,
        clickedX: -1,
        clickedY: -1
      }
    case actionTypes.LOAD_HEAT_MAP_OPTION_SUCCESS: {
      const heatmap = action.payload;
      
      const data = []
      for (const s in heatmap) {
        const step = Array(32)
        for (let i = 0; i < 32; i++) {
          step[i] = Array(32)
        }
        for (const d of heatmap[s].heatmap) {
          const x = d[0]
          const y = d[1]
          const v = d[2]
          step[x][y] = v === -1 ? v : v * 100
        }
        data.push(step)
      }
      return {
        ...state,
        status: dataStatus.SUCCESS,
        data
      };
    }
    case actionTypes.CLICK_HEAT_MAP: {
      const { x, y } = action.payload
      return {
        ...state,
        clickedX: x,
        clickedY: y,
      };
    }
    case actionTypes.RESET_ALL_IMAGES: {
      return initialState;
    }
    default:
      return state;
  }
}
