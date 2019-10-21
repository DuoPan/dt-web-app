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
    default:
      return state;
  }
}
