import actionTypes from "../constants/action-types";

const initialState = {
  cur: -1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_SERIAL_NUMBER: {
      const { cur } = action.payload
      return {
        ...state,
        cur: cur,
      };
    }
    case actionTypes.LOAD_TILE_IMAGES_SUCCESS:
    case actionTypes.LOAD_HEAT_MAP_OPTION_SUCCESS:
      return {
        ...state,
        cur: action.payload.length - 1
      }
    default:
      return state;
  }
}
