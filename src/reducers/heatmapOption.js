import actionTypes from "../constants/action-types";
import dataStatus from '../constants/dataStatus'

const initialState = {
  status: dataStatus.INIT,
  data: [],
  lineData: {},
  clickedX: 0,
  clickedY: 0,
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
    case actionTypes.LOAD_HEAT_MAP_OPTION_SUCCESS: {console.log('aaaa', action)
      const { heatmap } = action.payload;
      let _data = [];
      let _single = [];
      let _x = 0;
      let _y = 0;
      heatmap.forEach(function (elem) {
        let hm = elem.heatmap;
        _single = [];
        hm.forEach(function(item) {
          if(item[1] > _x) {
            _x = item[1];
          }
          if(item[0] > _y) {
            _y = item[0];
          }
        });
       // console.log(_x, _y,'------');//23, 6

        for (let j = 0 ;j <= _y; ++ j) {
          let _a = [];
          for (let i = 0 ; i <= _x; ++ i) {
            let _v = hm[i+(_x+1)*j][2];
            if (_v === -1) {
              _a.push(0);
            } else {
              _a.push(Math.floor(_v*100+1));
            }
          }

          _single.push(_a);
        }
        let _newSingle = _single.reverse();
        _data.push(_newSingle);
      });console.log('bbbb', _data)
      return {
        ...state,
        status: dataStatus.SUCCESS,
        data: _data,
        lineData: action.payload.lineplot,
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
